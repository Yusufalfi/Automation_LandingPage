
import React from 'react';
import { ArrowRight, Zap, Clock, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { advantages } from '../data/siteData'; 

const IconComponents = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Cpu: Cpu
};

export default function ProofSection() {
  return (
    <section className="proof-wrapper">
      <div className="container">
        <div className="head">
          <div>
            <small className="tag-eyebrow">04 / MANFAAT & KEUNGGULAN</small>
            <h2>Kenapa Bisnis Anda Harus Pakai Otomasi Sekarang?</h2>
          </div>
          <p className="proof-subtitle">
            Hentikan membuang waktu dan biaya untuk proses manual yang lambat. Tingkatkan kecepatan operasional bisnis Anda ke level berikutnya dengan solusi otomasi modern.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="advantages-grid">
          {advantages.map((item, index) => {
            const SpecificIcon = IconComponents[item.icon];
            return (
              <div key={index} className="advantage-card">
                <div className="card-top">
                  {/* 3. Render ikonnya di sini */}
                  <div className="card-icon">
                    {SpecificIcon ? <SpecificIcon size={28} /> : null}
                  </div>
                  <span className="card-badge">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Bar */}
        <div className="proof-cta-box">
          <div className="cta-info">
            <Zap size={24} className="zap-icon" />
            <span>Siap memangkas waktu kerja manual tim Anda hari ini?</span>
          </div>
          <a href="#cta" className="proof-cta-btn">
            <span>Otomatiskan Alur Kerja Anda</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
