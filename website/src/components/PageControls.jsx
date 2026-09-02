import React, { useState, useEffect } from 'react';

// ---------------------------------------------------------------------------
// Shared floating top-right control cluster: Back (in-app tab history, not
// browser history — this is a single-page app with no routing, so a literal
// browser-back would just leave the site), scroll-to-Top, and a tab-specific
// Export action. Used by all four tabs so the interaction feels the same
// everywhere. Fades in once the user has actually scrolled, and collapses to
// a bottom-right cluster on narrow screens so it never fights the (possibly
// multi-row) mobile header for space.
// ---------------------------------------------------------------------------

export function downloadTextFile(filename, content, mime = 'text/csv;charset=utf-8;') {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const PageControls = ({ onBack, canGoBack = false, onExport, exportLabel = 'Export CSV', dark = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 220);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className={`pg-ctrl${visible ? ' visible' : ''}`} role="toolbar" aria-label="Page navigation and export">
      <style>{`
        .pg-ctrl { position: fixed; top: 92px; right: 22px; display: flex; flex-direction: column; gap: 10px; z-index: 600;
          opacity: 0; transform: translateY(-8px); pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
        .pg-ctrl.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
        @media (prefers-reduced-motion: reduce) { .pg-ctrl { transition: opacity .01s linear; transform: none; } }
        @media (max-width: 780px) { .pg-ctrl { top: auto; bottom: 22px; right: 16px; flex-direction: column-reverse; } }

        .pg-btn { position: relative; width: 44px; height: 44px; border-radius: 50%; border: none;
          background: ${dark ? 'rgba(255,255,255,0.92)' : 'rgba(29,29,31,0.85)'};
          color: ${dark ? '#1d1d1f' : '#ffffff'};
          display: flex; align-items: center; justify-content: center; font-size: 16px; cursor: pointer;
          backdrop-filter: blur(8px); box-shadow: 0 6px 18px rgba(0,0,0,0.24); transition: background .2s ease, transform .2s ease; }
        .pg-btn:hover:not(:disabled) { transform: scale(1.07); background: ${dark ? '#ffffff' : 'rgba(29,29,31,0.98)'}; }
        .pg-btn:focus-visible { outline: 2px solid ${dark ? '#0071e3' : '#ffffff'}; outline-offset: 2px; }
        .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        .pg-tip { position: absolute; right: 54px; top: 50%; transform: translateY(-50%); background: rgba(29,29,31,0.92); color: #fff;
          font-size: 0.72rem; font-weight: 600; padding: 5px 10px; border-radius: 8px; white-space: nowrap;
          opacity: 0; pointer-events: none; transition: opacity .15s ease; }
        .pg-btn:hover .pg-tip, .pg-btn:focus-visible .pg-tip { opacity: 1; }
        @media (max-width: 780px) { .pg-tip { right: auto; left: 54px; } }
      `}</style>

      <button type="button" className="pg-btn" aria-label="Back to previous tab" onClick={onBack} disabled={!canGoBack}>
        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
        <span className="pg-tip">Back</span>
      </button>

      <button type="button" className="pg-btn" aria-label="Scroll to top" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
        <span className="pg-tip">Top</span>
      </button>

      {onExport && (
        <button type="button" className="pg-btn" aria-label={exportLabel} onClick={onExport}>
          <i className="fa-solid fa-download" aria-hidden="true"></i>
          <span className="pg-tip">{exportLabel}</span>
        </button>
      )}
    </div>
  );
};

export default PageControls;
