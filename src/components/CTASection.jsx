import React from 'react';
import { MessageSquare, ArrowUpRight, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="cta-dark-wrapper">
      <div className="container">
        
        {/* Main Full Console Window */}
        <div className="cta-hero-console">
          
          {/* Header Bar Console */}
          <div className="console-top-bar">
            <div className="bar-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="bar-title">~/automation-agent/deploy_session.sh</span>
            </div>
            <div className="bar-status">
              <Sparkles size={13} className="sparkle-icon" />
              <span>LIVE CONSULTATION READY</span>
            </div>
          </div>

          <div className="console-main-body">
            
            {/* Sisi Kiri: Main Copy & Terminal Logs */}
            <div className="console-left-content">
              <div className="terminal-badge">
                <Terminal size={14} />
                <code>STATUS: READY_FOR_DEPLOYMENT</code>
              </div>

              <h2>
                Punya alur kerja yang <br />
                menghabiskan waktu <span className="text-acid-highlight">Tim anda?</span>
              </h2>

              <p>
                Ceritakan bagaimana prosesnya sekarang. Tidak perlu paham teknisnya—biar kami yang Mapping potensi otomasinya.
              </p>
            </div>

            {/* Sisi Kanan: Action Ticket Box */}
            <div className="console-right-action">
              <div className="action-ticket-box">
                <small className="ticket-label">SESI DISKUSI ALUR KERJA</small>
                <div className="ticket-price">GRATIS 20 MENIT</div>
                
                <a 
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20diskusi%20otomasi%20proses%20bisnis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-wa-btn"
                >
                  <MessageSquare size={20} />
                  <span>Chat WhatsApp Sekarang</span>
                  <ArrowUpRight size={22} className="arrow-icon" />
                </a>

                <span className="ticket-subtext">
                  ⚡ Diskusi via Chat / Google Meet
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}