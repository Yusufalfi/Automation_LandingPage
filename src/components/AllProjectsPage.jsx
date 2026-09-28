// import React, { useState } from 'react';
// import { ArrowLeft, Search, ArrowUpRight } from 'lucide-react';
// import { projects } from '../data/siteData';

// export default function AllProjectsPage({ onBack, onOpenDemo }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('ALL');

//   const categories = ['ALL', 'RPA + AI', 'WEB SCRAPING', 'WEB AUTOMATION', 'RPA'];

//   // Background color untuk ilustrasi header card sesuai urutan/tipe
//   const bannerColors = ['#b2f5ea', '#8ce8ff', '#ffb8d2', '#d4b2ff', '#ffd3e0'];

//   // Filter logika search & category
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory =
//       selectedCategory === 'ALL' ||
//       (project.tag && project.tag.toUpperCase() === selectedCategory.toUpperCase());
    
//     const matchesSearch =
//       project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (project.techs && project.techs.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="all-projects-wrapper">
//       <div className="container">
        
//         {/* Tombol Back to Home */}
//         <div className="all-proj-top">
//           <button type="button" className="back-btn" onClick={onBack}>
//             <ArrowLeft size={16} strokeWidth={2.5} />
//             <span>BACK TO HOME</span>
//           </button>
//         </div>

//         {/* Header Title & Eyebrow */}
//         <div className="all-proj-header">
//           <div>
//             <small className="tag-eyebrow">ARCHIVE & CASE STUDIES</small>
//             <h1 className="all-proj-title">All Automation Works.</h1>
//             <p className="all-proj-sub">
//               A complete list of RPA workflows, scraping pipelines, and web automations I've built.
//             </p>
//           </div>

//           {/* Search Input Box */}
//           <div className="search-box">
//             <Search size={18} strokeWidth={2.5} />
//             <input
//               type="text"
//               placeholder="Search tech or title..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Filter Category Chips */}
//         <div className="category-filter-wrap">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               type="button"
//               className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
//               onClick={() => setSelectedCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Grid 2 Kolom Card */}
//         <div className="all-projects-grid">
//           {filteredProjects.map((proj, index) => (
//             <article
//               key={proj.n || index}
//               className="archive-card"
//               onClick={() => onOpenDemo(proj)}
//             >
//               {/* Banner / Graphic Area Khas Neo-Brutalism */}
//               <div
//                 className="archive-card-banner"
//                 style={{ backgroundColor: bannerColors[index % bannerColors.length] }}
//               >
//                 <div className="banner-star">✦</div>
//                 <div className="banner-tag">{proj.tag || 'RPA + AI'}</div>
//                 <div className="banner-status-badge">
//                   <span className="dot"></span> LIVE
//                 </div>
//                 {/* Mock UI window bar */}
//                 <div className="banner-window-mock">
//                   <div className="mock-bar"></div>
//                   <div className="mock-bar short"></div>
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="archive-card-body">
//                 <span className="archive-num-tag">
//                   {proj.n || `0${index + 1}`} / {proj.tag || 'RPA'}
//                 </span>
//                 <h3 className="archive-title">{proj.title}</h3>
//                 <p className="archive-desc">{proj.desc}</p>

//                 {/* Tech Chips */}
//                 <div className="archive-tech-chips">
//                   {(proj.techs || ['UiPath', 'ChatGPT API', 'OCR']).map((tech, idx) => (
//                     <span key={idx} className="tech-pill">{tech}</span>
//                   ))}
//                 </div>

//                 {/* Impact Divider */}
//                 <div className="archive-impact-area">
//                   <small>IMPACT —</small>
//                   <p>{proj.impact || 'Eliminated manual data entry completely.'}</p>
//                 </div>

//                 {/* External Link Icon */}
//                 <div className="archive-card-footer">
//                   <ArrowUpRight size={18} strokeWidth={2.5} />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/siteData';

export default function AllProjectsPage({ onBack, onOpenDemo }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // 1. Ambil kategori secara dinamis dari data JSON unik
  const categories = useMemo(() => {
    const tags = projects
      .map((p) => p.tag)
      .filter(Boolean)
      .map((t) => t.toUpperCase());
    return ['ALL', ...Array.from(new Set(tags))];
  }, []);

  // 2. Filter proyek berdasarkan Kategori & Search Query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'ALL' ||
        (project.tag && project.tag.toUpperCase() === selectedCategory.toUpperCase());

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title?.toLowerCase().includes(query) ||
        project.desc?.toLowerCase().includes(query) ||
        project.techs?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="all-projects-wrapper">
      <div className="container">
        
        {/* Tombol Back */}
        <div className="all-proj-top">
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeft size={16} strokeWidth={2.5} />
            <span>BACK TO HOME</span>
          </button>
        </div>

        {/* Header */}
        <div className="all-proj-header">
          <div>
            <small className="tag-eyebrow">ARCHIVE & CASE STUDIES</small>
            <h1 className="all-proj-title">All Automation Works.</h1>
            <p className="all-proj-sub">
              A complete list of RPA workflows, scraping pipelines, and web automations I've built.
            </p>
          </div>

          {/* Search Box */}
          <div className="search-box">
            <Search size={18} strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters (Dinamis dari JSON) */}
        <div className="category-filter-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="all-projects-grid">
          {filteredProjects.map((proj, index) => {
            // Gunakan warna dari JSON jika ada, jika tidak ada baru gunakan fallback dari JSON/index
            const bgColor = proj.bannerColor || '#b2f5ea';

            return (
              <article
                key={proj.id || proj.n || index}
                className="archive-card"
                onClick={() => onOpenDemo(proj)}
              >
                {/* Banner Area */}
                <div className="archive-card-banner" style={{ backgroundColor: bgColor }}>
                  <div className="banner-star">✦</div>
                  {proj.tag && <div className="banner-tag">{proj.tag}</div>}
                  
                  {proj.status && (
                    <div className="banner-status-badge">
                      <span className="dot"></span> {proj.status}
                    </div>
                  )}

                  <div className="banner-window-mock">
                    <div className="mock-bar"></div>
                    <div className="mock-bar short"></div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="archive-card-body">
                  <span className="archive-num-tag">
                    {proj.n || `0${index + 1}`} {proj.tag ? `/ ${proj.tag}` : ''}
                  </span>
                  
                  <h3 className="archive-title">{proj.title}</h3>
                  <p className="archive-desc">{proj.desc}</p>

                  {/* Tech Chips (Render hanya jika array tersedia) */}
                  {Array.isArray(proj.techs) && proj.techs.length > 0 && (
                    <div className="archive-tech-chips">
                      {proj.techs.map((tech, idx) => (
                        <span key={idx} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  )}

                  {/* Impact Section */}
                  {proj.impact && (
                    <div className="archive-impact-area">
                      <small>IMPACT —</small>
                      <p>{proj.impact}</p>
                    </div>
                  )}

                  {/* Footer Icon */}
                  <div className="archive-card-footer">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
}