import { ArrowUpRight, Check } from 'lucide-react';
import AutomationFlow from './AutomationFlow';
import { whatsappUrl } from '../data/siteData';

export default function Hero(){
  return <header className="hero container">
    <div className="hero-content">
      <span className="tag-eyebrow">AUTOMATION · AI · WEB DATA</span>
     
      {/* Peningkatan Headline & Subheadline: Lebih berorientasi pada manfaat & efisiensi */}
      <h1>Masih Kerja<br/><mark>Manual ?</mark> Untuk Pekerjaan yang Sama Setiap Hari?.</h1>
      
      <p>Kami membantu mengotomatisasi proses bisnis yang repetitif mulai dari input data, pengelolaan dokumen, pelaporan rutin, hingga pengumpulan data web. Tujuannya sederhana: mengurangi pekerjaan manual, menghemat waktu, dan membebaskan tim untuk fokus pada hal yang lebih strategis.</p>
      
      <div className="actions">
        {/* Peningkatan CTA: Lebih mengundang diskusi dan menunjukkan keahlian */}
        <a className="btn primary" href={whatsappUrl}>Konsultasikan Alur Kerja Anda <ArrowUpRight/></a>
        <a className="btn" href="#projects">Lihat Bukti Proyek ↓</a>
      </div>
      
      <div className="checks">
        <span className="text-xs md:text-sm flex items-center gap-1"><Check /> Hemat Waktu</span>
        <span className="text-xs md:text-sm flex items-center gap-1"><Check /> Kurangi Kerja Manual</span>
        <span className="text-xs md:text-sm flex items-center gap-1"><Check /> Proses Lebih Cepat</span>
      </div>
    </div>
    
    <div className="hero-visual">
      <AutomationFlow/>
    </div>
  </header>;
}