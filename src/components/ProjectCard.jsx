
// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function ProjectCard({ project, onOpenDemo }) {
//   return (
//     <article className="neo-card-project" onClick={() => onOpenDemo(project)}>
//       <div className="card-inner-top">
//         <div className="projecttop">
//           <strong className="card-number">{project.n}</strong>
//           <span className="tag">{project.tag}</span>
//         </div>

//         <h3 className="project-title">{project.title}</h3>
//         <p className="project-desc">{project.desc}</p>

//         <div className="beforeafter">
//           <div>
//             <small>SEBELUM</small>
//             <b>Proses manual</b>
//           </div>
//           <div>
//             <small>SESUDAH</small>
//             <b>{project.flow}</b>
//           </div>
//         </div>
//       </div>

//       <div className="card-inner-bottom">
//         <div className="impact">
//           {project.impact}
//         </div>

//         <button type="button" className="action-demo-btn">
//           <span>Lihat Detail & Demo</span>
//           <ExternalLink size={15} />
//         </button>
//       </div>
//     </article>
//   );
// }


import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpenDemo }) {
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

        {/* WORKFLOW */}
        <div className="workflow">
          <div className="workflow-label">
            WORKFLOW
          </div>

          <div className="workflow-flow">
            {project.flow}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="card-inner-bottom">
        <div className="impact">
          <small>RESULT </small>
          <span>{project.impact}</span>
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