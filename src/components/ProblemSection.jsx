// import { problems } from '../data/siteData';

// export default function ProblemSection() {
//   return (
//     <div className="problem-grid-bg">
//       <section id='problem' className="section container">
//         <div className="head">
//           <div>
//             <small className="tag-eyebrow">01 / MASALAH</small>
//             <h2>Mungkin ini terjadi<br/>di bisnis Anda.</h2>
//           </div>
//           <p>Tidak semua pekerjaan harus diotomatisasi. Kita cari bagian yang repetitif dan benar-benar menghabiskan waktu.</p>
//         </div>
//         <div className="grid3">
//           {problems.map(x => (
//             <article className="neo-card" key={x[0]}>
//               <span className="tag">{x[0]}</span>
//               <h3>{x[1]}</h3>
//               <p>{x[2]}</p>
//               <div className="solution"> {x[3]}</div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { problems } from '../data/siteData';

export default function ProblemSection() {
  return (
    <div className="problem-grid-bg">
      <section id="problem" className="section container">
        <div className="head">
          <div>
            <small className="tag-eyebrow">01 / MASALAH</small>
            <h2>Mungkin ini terjadi<br />di bisnis Anda.</h2>
          </div>
          <p>Tidak semua pekerjaan harus diotomatisasi. Kita cari bagian yang repetitif dan benar-benar menghabiskan waktu.</p>
        </div>

        <div className="grid3">
          {problems.map(x => {
            const isOther = x[0] === 'OTHER';

            if (isOther) {
              return (
                <article className="neo-card card-other-dark" key={x[0]}>
                  <div>
                    <span className="tag tag-other">{x[0]}</span>
                    <h3>{x[1]}</h3>
                    <p>{x[2]}</p>
                    <div className="solution solution-other">{x[3]}</div>
                  </div>

                  {/* Tombol CTA di Card Other */}
                  <a 
                    href="https://wa.me/6289608095112?text=Halo,%20saya%20punya%20studi%20kasus%20otomasi%20yang%20berbeda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cta-btn-other"
                  >
                    <MessageSquare size={16} />
                    <span>Konsultasi Kasus Anda</span>
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            }

            return (
              <article className="neo-card" key={x[0]}>
                <span className="tag">{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                <div className="solution">{x[3]}</div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}