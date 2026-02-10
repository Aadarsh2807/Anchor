
import React from 'react';
import { SafetyState } from '../types';

interface SafetyProps {
  state: SafetyState;
  setState: (s: SafetyState) => void;
}

const Safety: React.FC<SafetyProps> = ({ state, setState }) => {
  const toggle = (key: keyof SafetyState) => {
    setState({ ...state, [key]: !state[key] });
  };

  return (
    <div className="flex flex-col px-6 py-8 min-h-full">
      <header className="mb-10">
        <h1 className="text-xl font-bold tracking-[0.4em] uppercase">Safety</h1>
        <div className="h-0.5 w-12 bg-primary mt-1"></div>
      </header>

      <div className="space-y-8 flex-1">
        {/* Radar Visual */}
        <div className="relative aspect-square w-full max-w-[240px] mx-auto flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full border-2 border-primary/20 ${state.sentinelMode ? 'animate-pulse' : 'opacity-20'}`}></div>
          <div className={`absolute inset-4 rounded-full border border-primary/10 ${state.sentinelMode ? 'animate-pulse delay-75' : 'opacity-20'}`}></div>
          <div className={`absolute inset-12 rounded-full border border-primary/5 ${state.sentinelMode ? 'animate-pulse delay-150' : 'opacity-20'}`}></div>
          
          <div className={`relative size-32 rounded-full bg-matte-surface border border-white/10 flex flex-col items-center justify-center shadow-2xl transition-all duration-500 ${state.sentinelMode ? 'glow-cyan' : 'grayscale opacity-50'}`}>
            <span className={`material-symbols-outlined !text-[48px] ${state.sentinelMode ? 'text-primary fill-1' : 'text-slate-600'}`}>
              radar
            </span>
            <p className="text-[10px] font-bold tracking-widest uppercase mt-2">
              {state.sentinelMode ? 'Active' : 'Standby'}
            </p>
          </div>

          {/* Radar Sweep */}
          {state.sentinelMode && (
             <div className="absolute inset-0 rounded-full border-l-2 border-primary/30 animate-spin" style={{ animationDuration: '3s' }}></div>
          )}
        </div>

        {/* Security Controls */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Security Protocols</h3>
          
          <div className="space-y-3">
            {[
              { id: 'sentinelMode', label: 'Sentinel Mode', icon: 'security', desc: 'Main autonomous system' },
              { id: 'intrusionDetection', label: 'Intrusion Detection', icon: 'sensors', desc: 'Real-time cabinet sensors' },
              { id: 'guardMode', label: 'Guard Mode', icon: 'gpp_good', desc: 'Active proximity deterrence' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => toggle(item.id as keyof SafetyState)}
                className="w-full flex items-center justify-between p-5 bg-matte-surface rounded-2xl border border-white/5 active:scale-[0.98] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`size-10 rounded-xl flex items-center justify-center border transition-all ${state[item.id as keyof SafetyState] ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white/5 border-white/10 text-slate-600'}`}>
                    <span className="material-symbols-outlined !text-[20px]">{item.icon}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold tracking-tight">{item.label}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className={`size-2 rounded-full ${state[item.id as keyof SafetyState] ? 'bg-primary shadow-[0_0_8px_rgba(0,225,255,1)]' : 'bg-slate-700'}`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Threat Level */}
        <div className="bg-matte-surface p-6 rounded-2xl border border-white/5 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Integrity Score</p>
            <p className="text-sm font-bold text-primary">98%</p>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[98%] shadow-[0_0_10px_rgba(0,225,255,0.4)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
