
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../data/siteData';

export default function Navbar({ onNavigate }) {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav>
      <div className="container nav">
        <a 
          className="logo" 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'top')}
        >
          YUSUF<span>/</span>AUTOMATION
        </a>
        
        <div className="navlinks">
          <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>
            Service
          </a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>
            Project
          </a>
          <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')}>
            Case
          </a>
          <a href="#process" onClick={(e) => handleLinkClick(e, 'process')}>
            Metode Kerja
          </a>
          <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')}>
            Faq
          </a>
        </div>

        <a className="navcta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Chat WhatsApp <ArrowUpRight />
        </a>
      </div>
    </nav>
  );
}