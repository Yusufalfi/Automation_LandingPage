import React, { useState } from 'react';
import { ArrowRight, Zap, AlertTriangle, CheckCircle2, Terminal } from 'lucide-react';

export default function ProofSection() {
  const [mode, setMode] = useState('auto'); // 'manual' | 'auto'

  const metrics = {
    manual: {
      speed: '4 - 6 Jam / Hari',
      error: '~15% Error Rate',
      cost: 'Tinggi (Lembur Staf)',
      status: 'SLOOW & PRONE TO ERROR',
      statusBg: '#ff6947',
      logs: [
        '⚠️ 09:00 - Mengunduh 50 file PDF invoice manual...',
        '⚠️ 11:30 - Typo input nominal Rp 15.000.000 ke Excel',
        '⚠️ 14:20 - Staf kelelahan, proses rekonsiliasi terhenti',
        '❌ 17:00 - Laporan bulanan tertunda 2 hari'
      ]
    },
    auto: {
      speed: '< 3 Menit Executed',
      error: '0% Human Error',
      cost: 'Hemat 80% Cost Operasional',
      status: '24/7 RUNNING PERFECTLY',
      statusBg: '#d9ff3f',
      logs: [
        '⚡ 09:00:01 - Bot berjalan otomatis via Scheduled Trigger',
        '⚡ 09:00:15 - OCR Ekstraksi 50 PDF Invoice selesai (100% akurat)',
        '⚡ 09:00:45 - Direct Injection ke SAP & Intraweb Database',
        '✅ 09:01:00 - Laporan dikirim otomatis ke Email/Slack'
      ]
    }
  };

  const current = metrics[mode];

  return (
    <section className="proof-wrapper">
      <div className="container">
        
        {/* Main Grid 2 Kolom */}
        <div className="proof-grid">
          
          {/* Kolom Kiri: Controls & Narrative */}
          <div className="proof-left">
            <small className="tag-eyebrow">05 / PRINSIP & NILAI</small>
            <h2>Business Problem First.</h2>
            <p>
              Tujuannya bukan membuat bot sebanyak mungkin. Tujuannya memangkas beban kerja manual agar operasional bisnis Anda berjalan tanpa hambatan.
            </p>

            {/* Toggle Switcher Mode */}
            <div className="mode-switcher-box">
              <span className="switcher-label">SIMULASI ALUR KERJA:</span>
              <div className="switcher-buttons">
                <button 
                  onClick={() => setMode('manual')}
                  className={`switch-btn ${mode === 'manual' ? 'active-manual' : ''}`}
                >
                  <AlertTriangle size={16} />
                  <span>Proses Manual</span>
                </button>
                <button 
                  onClick={() => setMode('auto')}
                  className={`switch-btn ${mode === 'auto' ? 'active-auto' : ''}`}
                >
                  <Zap size={16} />
                  <span>Sistem Otomasi (Bot)</span>
                </button>
              </div>
            </div>

            {/* Micro CTA */}
            <a href="#cta" className="proof-cta-btn">
              <span>Otomatiskan Alur Kerja Anda</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Kolom Kanan: Live Terminal & Metrics Board */}
          <div className="proof-right">
            <div className="terminal-window">
              
              {/* Terminal Window Top Bar */}
              <div className="terminal-bar">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={14} />
                  <span>WORKFLOW_SIMULATOR_V2.EXE</span>
                </div>
                <span className="terminal-status" style={{ background: current.statusBg, color: '#101010' }}>
                  {current.status}
                </span>
              </div>

              {/* Metrics KPI High impact */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <small>WAKTU EKSEKUSI</small>
                  <strong>{current.speed}</strong>
                </div>
                <div className="metric-card">
                  <small>TINGKAT AKURASI</small>
                  <strong>{current.error}</strong>
                </div>
                <div className="metric-card full-width">
                  <small>IMPAK BIAYA OPERASIONAL</small>
                  <strong>{current.cost}</strong>
                </div>
              </div>

              {/* Terminal Real-Time Console Log */}
              <div className="terminal-body">
                <div className="console-header">// EXECUTION LOGS:</div>
                {current.logs.map((log, index) => (
                  <div key={index} className={`log-line ${mode}`}>
                    {log}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}