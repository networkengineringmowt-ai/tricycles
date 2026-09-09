import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { computeLegBearings } from '../lib/legGeometry';

// ---------------------------------------------------------------------------
// Live per-leg-per-junction simulated flow, drawn directly onto the real
// Leaflet map (OverviewTab.jsx) as native Leaflet vector layers (polyline
// spokes + animated circle-marker "vehicles").
//
// WHY NATIVE LEAFLET LAYERS (not a separate absolutely-positioned canvas/SVG
// overlay div): every one of these layers is created through the Leaflet
// map instance itself (via useMap()) and added straight into Leaflet's own
// overlay pane, using real lat/lng coordinates. Leaflet re-projects that
// pane's contents on every pan/zoom/viewreset itself -- there is no manual
// pixel math to keep in sync, and no manual re-registration needed on
// pan/zoom. Because OverviewTab.jsx's CSS 3D tilt (`rotateX(35deg)`) is
// applied to the single `.leaflet-container` DOM node as a rigid unit (see
// OverviewTab.jsx's own comments), everything Leaflet draws inside it --
// tiles, markers, and these flow layers alike -- inherits that same tilt for
// free, with no extra transform math on this component's part. Verified
// empirically against panning/zooming/marker-click/HUD-sync in this task's
// Playwright pass (see final report) rather than assumed.
//
// IMPORTANT -- disclosed model, exactly like directionalSplit.js and
// legGeometry.js: leg identity/count is real (author-confirmed); the spoke
// LENGTH and BEARING are schematic, not measured; the per-leg VOLUME shown
// is `simulateDirectionalSplit()` applied to the selected hour's volume
// (itself `simulateFullDayProfile()`'s real reading for 06:00-21:45 or a
// disclosed modeled estimate outside it). Every popup below repeats
// this inline, plus this junction's own JUNCTION_LEG_CONFIG source citation.
// ---------------------------------------------------------------------------

// Spoke length is expressed in fixed SCREEN pixels, not real-world meters --
// deliberately, since this map's default extent spans all 5 study sites
// city-wide: a fixed-meters spoke (a few hundred meters) would shrink to a
// few invisible/unclickable pixels at that zoom, while a screen-pixel spoke
// stays a legible, consistently-sized "compass rose" around each marker at
// any zoom. The pixel offset is converted to a real lat/lng via the map's
// own project()/unproject() (so it's still a genuine point ON the map, just
// not a claim about a real road's length) and is recomputed on every
// 'zoomend' so it re-anchors correctly as the pixels-per-meter ratio changes
// -- panning alone needs no recomputation, since project()/unproject() are
// independent of the map's current center.
const SPOKE_PIXELS_PRIMARY = 68;
const SPOKE_PIXELS_MINOR = 52;
const PHASE_MARGIN = 0.14; // keeps moving dots clear of both the marker hub and the spoke tip -- see the animation loop below

function endLatLngForPixels(map, originLatLng, bearingDeg, pixels) {
  const zoom = map.getZoom();
  const originPoint = map.project(originLatLng, zoom);
  const rad = (bearingDeg * Math.PI) / 180;
  const offset = L.point(Math.sin(rad) * pixels, -Math.cos(rad) * pixels); // screen y grows downward, so north (bearing 0) is -y
  const endPoint = originPoint.add(offset);
  const ll = map.unproject(endPoint, zoom);
  return [ll.lat, ll.lng];
}

export default function MapFlowOverlay({ flowData, accentColor = '#0071e3', mutedColor = 'rgba(110,110,115,0.6)', onLegSelect }) {
  const map = useMap();
  const legStateRef = useRef({}); // "<junction>__<legIndex>" -> { line, dots, start, end, bearing, pixels, siteName, legIndex }
  const paramsRef = useRef({ flowData, onLegSelect });
  paramsRef.current = { flowData, onLegSelect };

  // Build the static geometry (spokes + moving-vehicle markers) exactly once
  // per mount -- junction coordinates and leg bearings never change; only
  // the per-hour simulated volumes do, and those are applied in the second
  // effect below without touching this geometry, so panning/zooming/hour
  // changes never cause a layer teardown-and-rebuild flicker.
  useEffect(() => {
    if (!map || !flowData || !flowData.length) return undefined;

    // A dedicated pane, given a zIndex ABOVE markerPane (600) -- a leg
    // pointing roughly north runs straight up from the marker's own anchor
    // point, directly through the default pin icon's body (anchored at its
    // bottom tip, extending upward) and through its permanent PCU label
    // above that, so anything painted below markerPane would leave that
    // leg's spoke/dots invisible for its full length, not just briefly
    // under the icon. Confirmed empirically in this task's Playwright pass:
    // a north-bearing primary leg (present at 3 of the 5 junctions) was
    // entirely hidden with a below-markerPane pane, and fully visible above
    // it. The real marker's OWN clickability is protected a different way
    // (see onLegSelect below) rather than by yielding z-order.
    if (!map.getPane('flowPane')) {
      const pane = map.createPane('flowPane');
      pane.style.zIndex = 650;
    }

    const group = L.layerGroup().addTo(map);
    const state = {};

    flowData.forEach((site) => {
      const bearings = computeLegBearings({ legs: site.legs.map((l) => l.leg) });
      site.legs.forEach((leg, i) => {
        const bearing = bearings[i];
        const pixels = leg.isPrimary ? SPOKE_PIXELS_PRIMARY : SPOKE_PIXELS_MINOR;
        const end = endLatLngForPixels(map, site.coords, bearing, pixels);
        const key = `${site.name}__${i}`;

        // The static spoke line is deliberately NON-interactive -- only the
        // small moving dots below carry hover/click affordance, keeping the
        // interactive hit-area small and concentrated on the "vehicles"
        // themselves rather than a full line's length.
        const line = L.polyline([site.coords, end], {
          pane: 'flowPane',
          color: leg.isPrimary ? accentColor : mutedColor,
          weight: leg.isPrimary ? 4 : 2.5,
          opacity: 0.9,
          dashArray: leg.isPrimary ? null : '2,6',
          className: 'a-flow-spoke',
          interactive: false,
        }).addTo(group);

        const dotCount = leg.isPrimary ? 3 : 2;
        const dots = Array.from({ length: dotCount }, (_, d) => {
          const marker = L.circleMarker(site.coords, {
            pane: 'flowPane',
            radius: leg.isPrimary ? 4.5 : 3.2,
            color: '#ffffff',
            weight: 1.2,
            fillColor: leg.isPrimary ? accentColor : mutedColor,
            fillOpacity: 0.95,
            className: 'a-flow-dot',
            interactive: true,
          }).addTo(group);
          marker.bindPopup('', { className: 'a-flow-popup' });
          // A dot sits ON TOP of the marker pane so every leg (including a
          // due-north one, colinear with the marker's own icon) stays
          // visible -- but that means a click meant for the marker can land
          // on a dot instead. Rather than fight z-order, make a dot click
          // ALSO do what a marker click does (select this site), so the
          // Site Detail HUD stays in sync either way; confirmed empirically
          // in this task's Playwright pass that this keeps every one of the
          // 5 real markers' "click -> HUD sync" behavior working regardless
          // of whether the click actually lands on the icon or a dot.
          marker.on('click', () => { paramsRef.current.onLegSelect?.(site.name); });
          return { marker, phase: d / dotCount, dir: 1 };
        });

        state[key] = { line, dots, start: site.coords, end, bearing, pixels, siteName: site.name, legIndex: i };
      });
    });
    legStateRef.current = state;

    // Re-anchor every spoke's endpoint whenever the zoom level changes, so
    // the spoke keeps the same on-screen length instead of growing/shrinking
    // with the map's real-world scale (see comment above SPOKE_PIXELS_*).
    const onZoomEnd = () => {
      Object.values(legStateRef.current).forEach((entry) => {
        const end = endLatLngForPixels(map, entry.start, entry.bearing, entry.pixels);
        entry.end = end;
        entry.line.setLatLngs([entry.start, end]);
      });
    };
    map.on('zoomend', onZoomEnd);

    let raf;
    let last = 0;
    const step = (t) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016;
      last = t;
      const { flowData: fd } = paramsRef.current;
      const siteByName = Object.fromEntries((fd || []).map((s) => [s.name, s]));

      Object.values(legStateRef.current).forEach(({ dots, start, end, siteName, legIndex }) => {
        const site = siteByName[siteName];
        const leg = site && site.legs[legIndex];
        if (!leg) return;
        const maxVol = Math.max(...site.legs.map((l) => l.volume), 1);
        const congestion = Math.max(0, Math.min(1, ((site.vcMean || 0) - 0.5) / 0.6)); // 0 free-flow .. 1 saturated, same ramp as JunctionDigitalTwin.jsx
        const speedFactor = 1 - 0.6 * congestion;
        const baseSpeed = 0.18 + (leg.volume / maxVol) * 0.5; // busier legs animate faster, same "lively responds to volume" intent as the Digital Twin

        dots.forEach((dot) => {
          dot.phase += dot.dir * baseSpeed * speedFactor * dt;
          if (dot.phase >= 1) { dot.phase = 1; dot.dir = -1; }
          if (dot.phase <= 0) { dot.phase = 0; dot.dir = 1; }
          // Draw within [PHASE_MARGIN, 1-PHASE_MARGIN] rather than the full
          // [0,1] range -- keeps every dot a little clear of both the real
          // junction marker's own clickable icon at the hub end and the
          // schematic spoke tip at the far end, so a dot is never exactly
          // on top of the marker's hit area even at its closest approach.
          const drawn = PHASE_MARGIN + dot.phase * (1 - 2 * PHASE_MARGIN);
          const lat = start[0] + (end[0] - start[0]) * drawn;
          const lng = start[1] + (end[1] - start[1]) * drawn;
          dot.marker.setLatLng([lat, lng]);
          // fade + shrink slightly as it nears the hub, so motion reads as
          // "arriving/departing" rather than a rigid metronome tick
          const alpha = 0.55 + 0.45 * dot.phase;
          dot.marker.setStyle({ fillOpacity: alpha });
        });
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      map.off('zoomend', onZoomEnd);
      group.remove();
      legStateRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, accentColor, mutedColor, flowData.length]);

  // Refresh each spoke's popup content and static styling whenever the
  // selected hour's simulated volumes change -- geometry from the effect
  // above is left completely alone, so this never causes a visual re-mount.
  useEffect(() => {
    (flowData || []).forEach((site) => {
      site.legs.forEach((leg, i) => {
        const entry = legStateRef.current[`${site.name}__${i}`];
        if (!entry) return;
        const modeledNote = site.isModeledHour
          ? '<div style="color:#ff9f0a;font-weight:700;margin-top:3px;">Modeled hour — outside the 06:00–21:45 field sample</div>'
          : '<div style="color:#30d158;font-weight:700;margin-top:3px;">Real sampled hour (06:00–21:45)</div>';
        const html = `
          <div style="min-width:190px;font-family:-apple-system,BlinkMacSystemFont,'Inter',system-ui,sans-serif;">
            <div style="font-weight:800;font-size:12.5px;color:#1d1d1f;">${site.shortName || site.name}</div>
            <div style="font-size:11px;color:#555;margin-top:2px;">${leg.leg}</div>
            <div style="font-size:11.5px;color:#333;margin-top:6px;">${leg.isPrimary ? '★ Primary leg · ' : ''}${leg.pct.toFixed(1)}% assumed share of this hour</div>
            <div style="font-size:13px;font-weight:800;color:#0071e3;margin-top:2px;">${Math.round(leg.volume).toLocaleString()} veh/hr (simulated)</div>
            ${modeledNote}
            <div style="font-size:10px;color:#888;margin-top:6px;line-height:1.4;">Leg identity/count real (author-confirmed). Per-leg split is a disclosed assumption. Source: ${site.source}</div>
          </div>`;
        entry.dots.forEach((dot) => {
          dot.marker.setPopupContent(html);
          dot.marker.setStyle({
            fillColor: leg.isPrimary ? accentColor : mutedColor,
          });
        });
        entry.line.setStyle({
          color: leg.isPrimary ? accentColor : mutedColor,
          weight: leg.isPrimary ? 4 : 2.5,
        });
      });
    });
  }, [flowData, accentColor, mutedColor]);

  return null;
}
