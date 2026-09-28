import React from 'react';
import { X, Target, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ activeVideo, onClose }) {
  if (!activeVideo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card-rich" onClick={(e) => e.stopPropagation()}>
        
        {/* Tombol Close Atas */}
        <button type="button" className="modal-x-btn" onClick={onClose}>
          <X size={20} strokeWidth={3} />
        </button>

        {/* Header Modal */}
        <div className="modal-rich-header">
          <div className="modal-tags">
            {activeVideo.tag && <span className="tag-pill">{activeVideo.tag}</span>}
            {activeVideo.n && <span className="modal-num">{activeVideo.n}</span>}
          </div>
          <h2 className="modal-rich-title">{activeVideo.title}</h2>
          {activeVideo.desc && (
            <div className="modal-banner-desc">
              <p>{activeVideo.desc}</p>
            </div>
          )}
        </div>

        {/* Body 2 Kolom */}
        <div className="modal-rich-body">
          {/* Kolom Kiri: Video & Before/After */}
          <div className="modal-left-col">
            {activeVideo.youtubeId ? (
              <div className="video-responsive-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="video-placeholder">
                <p>Demo video coming soon...</p>
              </div>
            )}

            {/* Render Before/After jika ada datanya */}
            {(activeVideo.beforeTime || activeVideo.afterTime) && (
              <div className="before-after-grid">
                {activeVideo.beforeTime && (
                  <div className="ba-card ba-before">
                    <small>⏱ BEFORE (MANUAL)</small>
                    <p>{activeVideo.beforeTime}</p>
                  </div>
                )}
                {activeVideo.afterTime && (
                  <div className="ba-card ba-after">
                    <small>⚡ AFTER (AUTOMATED)</small>
                    <p>{activeVideo.afterTime}</p>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack */}
            {Array.isArray(activeVideo.techs) && activeVideo.techs.length > 0 && (
              <div className="tech-stack-section">
                <span className="tech-stack-title">TECHNOLOGIES USED:</span>
                <div className="tech-tags-wrap">
                  {activeVideo.techs.map((tech, idx) => (
                    <span key={idx} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Kolom Kanan: Detail Deskripsi */}
          <div className="modal-right-col">
            {activeVideo.goal && (
              <div className="detail-item">
                <h5><Target size={16} strokeWidth={2.5} /> GOAL</h5>
                <p>{activeVideo.goal}</p>
              </div>
            )}

            {activeVideo.problem && (
              <div className="detail-item">
                <h5 className="problem-text"><AlertTriangle size={16} strokeWidth={2.5} /> PROBLEM</h5>
                <p>{activeVideo.problem}</p>
              </div>
            )}

            {activeVideo.solution && (
              <div className="detail-item">
                <h5 className="solution-text"><Lightbulb size={16} strokeWidth={2.5} /> SOLUTION</h5>
                <p>{activeVideo.solution}</p>
              </div>
            )}

            {activeVideo.impact && (
              <div className="detail-item">
                <h5 className="impact-text"><CheckCircle2 size={16} strokeWidth={2.5} /> IMPACT</h5>
                <p>{activeVideo.impact}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Modal */}
        <div className="modal-rich-footer">
          <button type="button" className="modal-close-text-btn" onClick={onClose}>
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}