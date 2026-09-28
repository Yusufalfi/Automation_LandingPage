import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';

export default function FAQSection(){
  const [open,setOpen] = useState(null);
  return <section id='faq' className="section container faq"><div className="head"><div><small className="tag-eyebrow">06 / FAQ</small><h2>Yang sering ditanyakan.</h2></div></div>{faqs.map(([q,a],i)=><div className="faqrow" key={q}><button onClick={()=>setOpen(open===i?null:i)}>{q}<ChevronDown className={open===i?'rot':''}/></button>{open===i&&<p>{a}</p>}</div>)}</section>;
}
