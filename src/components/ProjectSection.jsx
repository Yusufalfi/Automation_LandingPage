import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/siteData';
import { ArrowUpRight, FolderKanban } from 'lucide-react';

export default function ProjectSection({ onViewAllClick, onOpenDemo }) {
  return (
    <section id="projects" className="problem-grid-bg">
      <div className="section container">
        <div className="head">
          <div>
            <small className="tag-eyebrow">03 / PROJECT</small>
            {/* <h2>Dari Proses Manual Menjadi Automation</h2> */}
            <h2 className='title-project'>Bagaimana Saya Mengubah Proses Manual Menjadi Otomatisasi</h2>
          </div>
          <p>
            Contoh project yang menunjukkan bagaimana proses manual diubah menjadi workflow yang lebih otomatis.
          </p>
        </div>

        {/* Grid 3 Card */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.n} 
              project={project} 
              onOpenDemo={onOpenDemo}
            />
          ))}
        </div>

        {/* Tombol VIEW ALL AUTOMATION WORKS */}
        <div className="view-all-container">
          <button type="button" className="view-all-btn" onClick={onViewAllClick}>
            <FolderKanban size={18} />
            <span>VIEW ALL AUTOMATION WORKS</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}