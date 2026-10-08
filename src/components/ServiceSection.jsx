import React from 'react';
import ServiceCard from './ServiceCard';
import { services, tools } from '../data/siteData';

export default function ServiceSection() {
  return (
    <section id="services" className="section dark">
      <div className="container">
        <div className="head">
          <div>
            <small className="tag-eyebrow">02 / LAYANAN</small>
            <h2>Yang saya bangun</h2>
          </div>
          <p>Fokus pada pekerjaan yang repetitif, berbasis data, dan punya alur yang jelas untuk meningkatkan efisiensi operasional.</p>
        </div>

        <div className="grid4">
          {services.map((service) => (
            <ServiceCard key={service.n} service={service} />
          ))}
        </div>

        {/* Tech Stack Footer */}
        <div className="tools-wrapper">
          <small className="tools-title">TECH STACK & TOOLS:</small>
          <div className="tools">
            {tools.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
