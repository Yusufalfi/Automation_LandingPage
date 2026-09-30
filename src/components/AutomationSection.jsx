import { useEffect, useState } from "react";

const marketplaces = [
  ["Shopee", "shopee"],
  ["Lazada", "lazada"],
  ["TikTok Shop", "tiktok"],
  ["Blibli", "blibli"],
  ["Shopify", "shopify"],
  ["Plugo", "plugo"],
  ["WooCommerce", "woo"],
];

const dashboardItems = [
  "Pesanan",
  "Produk",
  "Stok",
  "Pengiriman",
  "Retur",
  "Laporan",
];

const steps = [
  {
    no: "1",
    title: "Terhubung ke semua channel",
    text: "Integrasikan toko Anda di berbagai marketplace dalam satu dashboard.",
  },
  {
    no: "2",
    title: "Semua data tersinkron otomatis",
    text: "Pesanan, stok, dan produk tersinkron secara real-time.",
  },
  {
    no: "3",
    title: "Proses jadi lebih efisien",
    text: "Kelola pesanan, pengiriman, retur, hingga laporan lebih cepat.",
  },
  {
    no: "4",
    title: "Bisnis lebih terkendali",
    text: "Pantau performa dan pertumbuhan bisnis dari satu tempat.",
  },
];

function BrandMark({ type }) {
  const bgColors = {
    shopee: "#ee4d2d",
    lazada: "#1725a4",
    tiktok: "#000000",
    blibli: "#0095da",
    shopify: "#95bf47",
    plugo: "#6d4aff",
    woo: "#7f54b3",
  };

  return (
    <span
      className="brand-mark"
      style={{ backgroundColor: bgColors[type] || "#64748b" }}
      aria-hidden="true"
    >
      {type === "shopee" ? "S" :
       type === "lazada" ? "L" :
       type === "tiktok" ? "♪" :
       type === "blibli" ? "B" :
       type === "shopify" ? "S" :
       type === "plugo" ? "P" : "W"}
    </span>
  );
}

function Check() {
  return (
    <span className="check-dot">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="m4 8 2.3 2.3L12 4.8" />
      </svg>
    </span>
  );
}

export default function AutomationSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % steps.length);
    }, 3600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="automation-section" id="automation">
      <div className="automation-inner">
        <p className="automation-kicker">
          Satu platform untuk semua kebutuhan bisnis online Anda
        </p>

        <div className="automation-grid">
          <div className="automation-copy">
            {/* Partikel oranye yang jatuh meluncur seperti data-particle */}
            <span className="step-particle" />

            {steps.map((step, index) => (
              <button
                key={step.no}
                className={`automation-step ${
                  active === index ? "is-active" : ""
                }`}
                onClick={() => setActive(index)}
                type="button"
              >
                <span className="step-number">{step.no}</span>

                <span className="step-content">
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="automation-visual" aria-label="Business automation flow">
            <div className="flow-grid" />

            <div className="marketplace-card">
              <div className="card-heading">Marketplace</div>

              <div className="marketplace-list">
                {marketplaces.map(([name, type], index) => (
                  <div
                    className={`marketplace-row ${
                      active === 0 ? "row-highlight" : ""
                    }`}
                    key={name}
                    style={{ "--row-delay": `${index * 70}ms` }}
                  >
                    <BrandMark type={type} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flow-core active-${active}`}>
              <div className="core-glow" />
              <div className="core-card">
                <div className="core-logo">
                  <span className="core-logo-ring">
                    <span>⚡</span>
                  </span>
                  <span>
                    <b>YUSUF</b>
                    <b>AUTOMATION</b>
                  </span>
                </div>
              </div>

              <div className="data-line">
                <span className="data-particle" />
                <span className="data-label">
                  Integrasi &amp; sinkronisasi real-time
                </span>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="card-heading">Kelola semua dalam satu dashboard</div>

              <div className="dashboard-list">
                {dashboardItems.map((item, index) => (
                  <div className="dashboard-row" key={item}>
                    <span className="dashboard-icon">
                      {index === 0 ? "▣" :
                       index === 1 ? "◆" :
                       index === 2 ? "▤" :
                       index === 3 ? "➜" :
                       index === 4 ? "↩" : "▥"}
                    </span>
                    <span>{item}</span>
                    <Check />
                  </div>
                ))}
              </div>
            </div>

            <div className="mini-note">
              <span className="note-dot" />
              <span>Data tersinkron otomatis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}