
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpenDemo }) {
  // Parsing Workflow Step (Aman untuk Array maupun String)
  const steps = Array.isArray(project.flow)
    ? project.flow
    : typeof project.flow === 'string'
    ? project.flow.split(/→|->/).map((item) => item.trim()).filter(Boolean)
    : [];

  return (
    <article
      className="neo-card-project"
      onClick={() => onOpenDemo(project)}
    >
      {/* TOP */}
      <div className="card-inner-top">
        <div className="projecttop">
          <strong className="card-number">
            {project.n}
          </strong>

          <span className="tag">
            {project.tag}
          </span>
        </div>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-desc">
          {project.desc}
        </p>

        {/* WORKFLOW PIPELINE */}
        <div className="workflow">
          <div className="workflow-label">
            WORKFLOW
          </div>

          <div className="workflow-track">
            {/* Bullet stabilo Horizontal */}
            <span className="workflow-particle" />

            {/* Node Langkah Workflow */}
            {steps.map((step, index) => (
              <span key={index} className="workflow-step-node">
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="card-inner-bottom">
        <div className="impact">
          <small>RESULT / IMPACT</small>
          
          {Array.isArray(project.impact) ? (
            <ul className="impact-bullet-list">
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <span>{project.impact}</span>
          )}
        </div>

        <button
          type="button"
          className="action-demo-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDemo(project);
          }}
        >
          <span>View Case Study</span>
          <ArrowUpRight size={17} strokeWidth={2} />
        </button>
      </div>
    </article>
  );
}
