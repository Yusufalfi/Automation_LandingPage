
import React, { useState } from 'react';
import { processSteps } from '../data/siteData';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="process-wrapper problem-grid-bg">
      <div className="container">
     
        <div className="head">
          <div>
            <small className="tag-eyebrow">05 / METODE KERJA</small>
            <h2>
              Bagaimana Bot <br /> Anda Dibangun
            </h2>
          </div>
          <p>
            Dari pemetaan masalah awal hingga robot dideploy ke sistem Anda tanpa mengganggu operasional harian.
          </p>
        </div>

        {/* Layout Split 2 Kolom */}
        <div className="process-split">
          
          
          {/* Sisi Kiri: Sticky Widget Navigasi Tahapan */}
          <div className="process-widget-shell">
            <div className="process-widget">
              <div className="widget-header">
                <span>TAHAPAN PROYEK</span>
                <span className="live-dot"></span>
              </div>
              <div className="widget-list">
                {processSteps.map((step, index) => (
                  <button
                    key={step[0]}
                    onClick={() => setActiveStep(index)}
                    className={`widget-item ${activeStep === index ? 'active' : ''}`}
                  >
                    <span className="step-num">{step[0]}</span>
                    <span className="step-name">{step[2]}</span>
                    <span className="step-phase">{step[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Detail Content List Timeline */}
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div
                key={step[0]}
                onMouseEnter={() => setActiveStep(index)}
                className={`timeline-card ${activeStep === index ? 'active' : ''}`}
              >
                <div className="timeline-badge-group">
                  <span className="badge-fase">FASE {step[0]}</span>
                  <span className="badge-tag">{step[1]}</span>
                </div>
                
                <h3>{step[2]}</h3>
                <p>{step[3]}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
