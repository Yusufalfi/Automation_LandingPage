import React from 'react';
import { Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <article className="neo-card service">
      <div className="flex-between">
        <span className="number-badge">{service.n}</span>
        <span className="tag-accent">READY TO DEPLOY</span>
      </div>
      
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      
      <ul>
        {service.items.map((x) => (
          <li key={x}>
            <span className="check-icon">
              <Check size={14} strokeWidth={3} />
            </span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
