import React from 'react';

// Kode CSS
const tickerStyles = `
.ticker {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background: #000;
  color: #fff;
  padding: 12px 0;
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
}

.ticker-track {
  display: inline-flex;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 15s linear infinite;
}

.ticker-track span {
  display: inline-flex;
  align-items: center;
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.ticker i {
  color: #c084fc; /* Atau warna hijau neon #a3e635 sesuai tema website */
  font-style: normal;
  margin: 0 20px;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

export default function Ticker() {
  const items = (
    <span>
      MANUAL → AUTOMATION <i>•</i> 
      DATA → PROCESS <i>•</i> 
      DOCUMENT → AI <i>•</i> 
      WEB → DATA <i>•</i> 
    </span>
  );

  return (
    <>
      <style>{tickerStyles}</style>
      <div className="ticker">
        <div className="ticker-track">
          {/* Teks diduplikasi 4x agar animasi berjalan mulus tanpa celah kosong */}
          {items}
          {items}
          {items}
          {items}
        </div>
      </div>
    </>
  );
}