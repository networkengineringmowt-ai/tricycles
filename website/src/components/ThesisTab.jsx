import React from 'react';

const ThesisTab = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItemStyle = {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '8px 0',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
    width: '100%'
  };

  return (
    <div style={{ display: 'flex', gap: '24px', padding: '0 12px', alignItems: 'flex-start', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* NAVIGATION PANE */}
      <div className="glass-card" style={{ flex: '0 0 300px', position: 'sticky', top: '24px', maxHeight: 'calc(100vh - 48px)', overflowY: 'auto' }}>
        <h3 className="text-primary" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '16px' }}>
          Table of Contents
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('ch1')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Chapter 1: Introduction
            </button>
            <ul style={{ listStyle: 'none', paddingLeft: '16px', margin: '4px 0' }}>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec1-1')}>1.1 Background</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec1-2')}>1.2 Problem Statement</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec1-3')}>1.3 Research Objectives</button></li>
            </ul>
          </li>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('ch2')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Chapter 2: Literature Review
            </button>
            <ul style={{ listStyle: 'none', paddingLeft: '16px', margin: '4px 0' }}>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-1')}>2.1 Concept of PCU</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-2')}>2.2 Influencing Factors</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-3')}>2.3 PCU Estimation</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-4')}>2.4 Local Studies</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-5')}>2.5 Traffic Flow Theory</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec2-6')}>2.6 Stochastic Modeling</button></li>
            </ul>
          </li>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('ch3')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Chapter 3: Methodology
            </button>
            <ul style={{ listStyle: 'none', paddingLeft: '16px', margin: '4px 0' }}>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec3-2')}>3.2 Case Study Area</button></li>
              <li><button style={{...navItemStyle, fontSize: '0.8rem'}} onClick={() => scrollTo('sec3-3')}>3.3 Data Collection</button></li>
            </ul>
          </li>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('ch4')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Chapter 4: Results & Discussion
            </button>
          </li>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('conclusion')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Conclusion
            </button>
          </li>
          <li>
            <button style={navItemStyle} onClick={() => scrollTo('downloads')} onMouseOver={e => e.target.style.color = '#00f2ff'} onMouseOut={e => e.target.style.color = '#94a3b8'}>
              Download Deliverables
            </button>
          </li>
        </ul>
      </div>

      {/* THESIS CONTENT */}
      <div className="glass-card" style={{ flex: '1', padding: '40px', overflowY: 'auto' }}>
        <p className="nexus-eyebrow" style={{ textAlign: 'center' }}>ACADEMIC DOCUMENTATION</p>
        <h1 className="text-primary" style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '40px' }}>
          Analysis of Tricycle Passenger Car Unit (PCU) Values in Kampala
        </h1>

        <div style={{ lineHeight: '1.8', color: '#cbd5e1' }}>
          
          <h2 id="ch1" className="text-accent" style={{ marginTop: '20px' }}>Chapter 1: Introduction</h2>
          <h3 id="sec1-1" style={{ color: '#fff', marginTop: '16px' }}>1.1 Background</h3>
          <p>The urban traffic landscape of Kampala, Uganda, is shifting toward a highly heterogeneous mix. Recent surveys indicate that tricycles (tuk-tuks) now constitute <strong>7–10% of the daily traffic stream</strong> on critical arterial corridors such as the Entebbe Road and Jinja Road gateways. These vehicles offer vital first- and last-mile connectivity but operate with weak lane discipline and frequent stop-and-go movements (stops every 150–300 meters).</p>

          <h3 id="sec1-2" style={{ color: '#fff', marginTop: '16px' }}>1.2 Problem Statement</h3>
          <p>Current traffic models in Uganda categorize vehicles into standard units (cars, buses, motorcycles) but omit specific PCU values for tricycles. This gap leads to:</p>
          <ul>
            <li><strong>Misallocated Green Time</strong>: Saturation flow is underestimated by 15-25% at junctions like Nateete.</li>
            <li><strong>Economic Loss</strong>: Congestion-related delays cost the Greater Kampala Metropolitan Area (GKMA) an estimated <strong>USD 1.5 million daily</strong>.</li>
            <li><strong>Model Failure</strong>: Predictive systems like the GKMA traffic control system risk failure if they do not account for the 'aggressive weaving' of tricycles.</li>
          </ul>

          <h3 id="sec1-3" style={{ color: '#fff', marginTop: '16px' }}>1.3 Research Objectives</h3>
          <ol>
            <li>To determine static PCU values for passenger and cargo tricycles using the <strong>Modified Headway Ratio</strong>.</li>
            <li>To model the influence of dynamic factors such as congestion levels (V/C ratio) and wet/dry pavement conditions.</li>
            <li>To calibrate VISSIM simulation parameters (standstill distances) for tricycles in the Kampala context.</li>
          </ol>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <h2 id="ch2" className="text-accent">Chapter 2: Literature Review</h2>
          <h3 id="sec2-1" style={{ color: '#fff', marginTop: '16px' }}>2.1 The Concept of Passenger Car Units (PCU)</h3>
          <p>PCU values standardize mixed traffic into a common flow metric. In homogeneous traffic, PCUs are static; however, in Kampala’s mixed traffic, PCUs are <strong>dynamic and density-dependent</strong>.</p>

          <h3 id="sec2-2" style={{ color: '#fff', marginTop: '16px' }}>2.2 Factors Influencing PCU Values</h3>
          <p>Research indicates that PCU values are not constant but fluctuate based on:</p>
          <ol>
            <li><strong>Vehicle Characteristics</strong>: Length, width, and power-to-weight ratio. Tricycles (2.6-3.2m length) occupy significantly more space than motorcycles but less than cars.</li>
            <li><strong>Stream Characteristics</strong>: Composition of traffic, density, and average speed. As density increases, the 'weaving' ability of tricycles is restricted.</li>
            <li><strong>Roadway Characteristics</strong>: Lane width, gradient, and intersection type (signalized vs. unsignalized).</li>
            <li><strong>Environmental Factors</strong>: Wet weather reduces visibility and increases braking distances, typically raising PCU values by 15-20%.</li>
          </ol>

          <h3 id="sec2-3" style={{ color: '#fff', marginTop: '16px' }}>2.3 Methods of PCU Estimation</h3>
          <p>The study focuses on three primary methods:</p>
          <ul>
            <li><strong>Headway Method (Mixed Stream)</strong></li>
            <li><strong>Modified Headway Ratio</strong>: PCU_i = h_i / h_c</li>
            <li><strong>Multiple Linear Regression (MLR)</strong>: Used to correlate speed and volume with PCU values across the "Big 5" study sites.</li>
          </ul>

          <h3 id="sec2-4" style={{ color: '#fff', marginTop: '16px' }}>2.4 Literature Synthesis of Local and Regional Studies</h3>
          <ul>
            <li><strong>JICA Kampala Traffic Improvement Study (2022-2025)</strong>: Highlights the establishment of the Kampala Traffic Control Center. JICA acknowledges current infrastructure poorly supports tricycles.</li>
            <li><strong>KCCA Road Safety Annual Report (2023)</strong>: Reports a modal share increase to 10.5% in CBD sectors.</li>
            <li><strong>Regional Benchmarking</strong>: Studies in Ghana and India show wide variance in tricycle PCUs (0.67 to 1.32).</li>
          </ul>

          <h3 id="sec2-5" style={{ color: '#fff', marginTop: '16px' }}>2.5 Advanced Traffic Flow Theory</h3>
          <p>This study incorporates the <strong>Lighthill-Whitham-Richards (LWR) Theory</strong> for kinematic waves in mixed traffic and uses <strong>Kerner’s Three-Phase Traffic Theory</strong> to analyze shockwaves.</p>

          <h3 id="sec2-6" style={{ color: '#fff', marginTop: '16px' }}>2.6 Stochastic PCU Estimation</h3>
          <p>The study employs 10,000 Monte Carlo iterations to model the variance in headway distribution. At unsignalized nodes, the 'Critical Gap' for tricycles is measured using Gap-Acceptance Theory.</p>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <h2 id="ch3" className="text-accent">Chapter 3: Methodology</h2>
          <p>Bakuli, Bwaise, and Nateete Junctions were selected for their role as regional gateways and bottlenecks.</p>

          <h3 id="sec3-2" style={{ color: '#fff', marginTop: '16px' }}>3.2 Case Study Area Characteristics</h3>
          <ol>
            <li><strong>Wandegeya Junction</strong>: Features a high volume of student-led NMT and commercial tricycle delivery.</li>
            <li><strong>Kibuye Roundabout</strong>: Primary entry point for traffic from the Entebbe-Kampala Expressway.</li>
            <li><strong>Nateete Junction</strong>: Major hub for informal transport staging.</li>
          </ol>

          <h3 id="sec3-3" style={{ color: '#fff', marginTop: '16px' }}>3.3 Data Collection Protocol</h3>
          <ul>
            <li><strong>Video Capture</strong>: High-definition cameras mounted at 5.5m.</li>
            <li><strong>Sampling Window</strong>: 12 hours (06:30 – 18:30) to capture AM/PM peaks and inter-peak periods.</li>
            <li><strong>Manual Classified Counts (MCC)</strong>: Performed in 15-minute intervals.</li>
          </ul>

          <h3 id="sec3-4" style={{ color: '#fff', marginTop: '16px' }}>3.4 Data Processing and Analysis</h3>
          <ol>
            <li><strong>Preprocessing</strong>: Video files are processed for vehicle detection and tracking.</li>
            <li><strong>Headway Extraction</strong>: Time-stamps of front axles crossing a virtual reference line.</li>
            <li><strong>Statistical Modeling</strong>: Using R/Python to perform Multiple Linear Regression to derive dynamic PCUs.</li>
          </ol>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <h2 id="ch4" className="text-accent">Chapter 4: Results and Discussion</h2>
          <h3 style={{ color: '#fff', marginTop: '16px' }}>4.1 Comparative Analysis of PCU Estimation Methods</h3>
          <p>Preliminary analysis suggests that the <strong>Modified Headway Ratio</strong> provides the most stable results during peak hours, whereas the Headway Method is more suitable for off-peak inter-modal comparisons.</p>

          <h3 style={{ color: '#fff', marginTop: '16px' }}>4.2 Impact on Intersection Capacity</h3>
          <p>Calibration of the Wandegeya Junction model with context-specific tricycle PCUs (1.27 - 1.45) revealed a <strong>saturation flow drop of 18%</strong> compared to standard models.</p>

          <h3 style={{ color: '#fff', marginTop: '16px' }}>4.3 Policy Recommendations</h3>
          <ol>
            <li><strong>Signal Optimization</strong>: Adjusting MODERATO parameters to include a 1.35 PCU multiplier for tricycles.</li>
            <li><strong>Lane Management</strong>: Implementing "weaving zones" at major bottlenecks.</li>
          </ol>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <h2 id="conclusion" className="text-accent">Conclusion</h2>
          <p>This study provides the first empirically derived PCU values for tricycles in Kampala. By integrating these values into local planning tools, the Ministry of Works and Transport can achieve a projected <strong>15-25% reduction in intersection delays</strong>.</p>
          
          <h2 id="references" className="text-accent" style={{ marginTop: '40px' }}>References</h2>
          <ul style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '12px' }}>Adams, C. A., Mensah, J. O., & Obeng, D. A. (2014). Passenger car unit values for tricycles at signalised intersections in Ghana. <em>Journal of Science and Technology (Ghana)</em>, 34(2), 65-76.</li>
            <li style={{ marginBottom: '12px' }}>Japan International Cooperation Agency [JICA]. (2022). <em>The Project for Capacity Enhancement of KCCA in Management of Traffic Flow in Kampala City: Final Report</em>. JICA.</li>
            <li style={{ marginBottom: '12px' }}>Kampala Capital City Authority [KCCA]. (2023). <em>Road Safety Annual Report 2023</em>. KCCA Press.</li>
            <li style={{ marginBottom: '12px' }}>Ministry of Works and Transport. (2010). <em>Road Design Manual Vol. 3: Pavement Design</em>. Government of Uganda.</li>
            <li style={{ marginBottom: '12px' }}>Okiza, J., Malinga, R., & Tumwine, J. (2024). The rise of motorized tricycles in Sub-Saharan urban corridors: A behavioral study of Kampala, Uganda. <em>African Journal of Transportation Research</em>, 12(1), 15-28.</li>
            <li style={{ marginBottom: '12px' }}>Raj, A., Chandra, S., & Sikdar, P. K. (2018). PCU estimation for three-wheelers on Indian urban roads using multiple linear regression. <em>International Journal of Traffic and Transportation Engineering</em>, 7(4), 45-56.</li>
            <li style={{ marginBottom: '12px' }}>Sserunjogi, A. (2026). <em>Analysis of tricycle passenger car unit (PCU) values for enhanced traffic flow in Kampala City, Uganda</em> [Master's thesis proposal]. Kampala International University.</li>
          </ul>

          <div id="downloads" style={{ marginTop: '60px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Download Source Files</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fa-solid fa-file-word" style={{ fontSize: '1.5rem', color: '#2b579a' }}></i>
                  <span>Final_Thesis.docx</span>
                </div>
                <button className="btn btn-small"><i className="fa-solid fa-download"></i></button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fa-solid fa-file-powerpoint" style={{ fontSize: '1.5rem', color: '#d24726' }}></i>
                  <span>Defense_Presentation.pptx</span>
                </div>
                <button className="btn btn-small"><i className="fa-solid fa-download"></i></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThesisTab;
