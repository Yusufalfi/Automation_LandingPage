import { useEffect, useState } from 'react';
import { Check, CirclePause, CirclePlay, Database, Workflow, Zap } from 'lucide-react';

const nodes = [
  ['01','DATA MASUK',Database,'Receive'],
  ['02','AUTOMATION',Workflow,'Process'],
  ['03','AI / RULES',Zap,'Decide'],
  ['04','HASIL',Check,'Deliver']
];

export default function AutomationFlow(){
  const [running,setRunning] = useState(true);
  const [step,setStep] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setStep(s => (s + 1) % 4), 900);
    return () => clearInterval(id);
  }, [running]);

  return <div className="flow-shell">
    <div className="flow-toolbar">
      <span><i className="live"/> LIVE AUTOMATION</span>
      <button onClick={() => setRunning(!running)}>{running ? <CirclePause/> : <CirclePlay/>}{running ? 'PAUSE' : 'RUN'}</button>
    </div>
    <div className="flow-stage">
      <div className="flow-grid"/><div className="wire w1"/><div className="wire w2"/><div className="wire w3"/>
      {[0,1,2,3,4].map(i => <i key={i} className={`particle q${i}`} style={{animationPlayState:running?'running':'paused'}}/>)}
      {nodes.map(([n,label,Icon,sub],i) => <div key={n} className={`flow-node node${i}${running && i===step?' active':''}`}><small>{n}</small><Icon/><b>{label}</b><em>{sub}</em></div>)}
      <div className="flow-footer"><span>PIPELINE / {running?'RUNNING':'PAUSED'}</span><span>STEP {step+1}/4</span></div>
    </div>
  </div>;
}
