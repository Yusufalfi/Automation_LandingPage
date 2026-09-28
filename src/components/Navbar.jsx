import React, { useState, useEffect } from 'react';
import { whatsappUrl } from '../data/siteData';

export default function Navbar({ onNavigate }) {
  const [currentLang, setCurrentLang] = useState('id');

  // Cek bahasa yang sedang aktif dari cookie
  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match && match[1]) {
      const lang = match[1].split('/').pop();
      if (lang === 'en' || lang === 'id') {
        setCurrentLang(lang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (currentLang === lang) return;
    
    // Set cookie untuk Google Translate
    document.cookie = `googtrans=/id/${lang}; path=/`;
    document.cookie = `googtrans=/id/${lang}; domain=.${window.location.hostname}; path=/`;
    
    setCurrentLang(lang);
    window.location.reload(); // Reload ringan untuk menerapkan translasi
  };

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

        {/* Action Buttons */}
        <div className="nav-actions">
          {/* Custom ID / EN Switcher Pill (Sesuai Gambar) */}
          <div className="lang-switcher">
            <button 
              type="button" 
              className={`lang-btn ${currentLang === 'id' ? 'active' : ''}`}
              onClick={() => changeLanguage('id')}
            >
              ID
            </button>
            <button 
              type="button" 
              className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          {/* Tombol Chat WhatsApp */}
          <a className="navcta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}