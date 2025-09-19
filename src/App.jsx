import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="branded-objects">Branded Objects</div>
        <div className="header-number">001</div>
      </div>
      
      <div className="horizontal-line"></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-headline">
            Make complex products <br />
            simple to understand.
          </h1>
          <p className="hero-description">
            We work with hardware, AI, and deep tech founders to create visuals and ads that convert.
          </p>
          <div className="horizontal-divider"></div>
          <p className="tagline">A micro-studio built for speed and clarity.</p>
          <a href="mailto:brandedobjects@gmail.com" className="cta-button">
            Let's talk →
          </a>
        </div>
        <div className="hero-image">
          <div className="mechanical-device"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="section-header">
          <div className="section-label">USE CASES</div>
          <div className="section-number">001</div>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-title">Spacia</div>
            <div className="project-number">001</div>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-title">Essential</div>
            <div className="project-number">002</div>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-title">Dockr</div>
            <div className="project-number">003</div>
          </div>
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-title">New Form Factor</div>
            <div className="project-number">004</div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="section-header">
          <div className="section-label">PROCESS</div>
          <div className="section-number">003</div>
        </div>
        <div className="process-grid">
          <div className="process-column">
            <div className="process-icon">□</div>
            <div className="process-title">Kick Off</div>
            <div className="process-description">
              We begin by deeply understanding your product, market, and goals.
            </div>
          </div>
          <div className="process-column">
            <div className="process-icon">▦</div>
            <div className="process-title">Research</div>
            <div className="process-description">
              We conduct thorough research to identify key insights and opportunities.
            </div>
          </div>
          <div className="process-column">
            <div className="process-icon">◎</div>
            <div className="process-title">Design</div>
            <div className="process-description">
              We craft compelling visuals and messaging that resonate with your audience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
