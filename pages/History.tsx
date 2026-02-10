
import React from 'react';
import { HistoryItem } from '../types';

interface HistoryProps {
  items: HistoryItem[];
}

const History: React.FC<HistoryProps> = ({ items }) => {
  return (
    <div className="flex flex-col px-6 py-8 min-h-full">
      <header className="mb-8">
        <h1 className="text-xl font-bold tracking-[0.4em] uppercase">History</h1>
        <div className="h-0.5 w-12 bg-primary mt-1"></div>
      </header>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-500 opacity-50 space-y-4">
          <span className="material-symbols-outlined text-6xl">history_toggle_off</span>
          <p className="text-xs font-bold tracking-widest uppercase">No Records Found</p>
        </div>
      ) : (
        <div className="relative space-y-6">
          {/* Vertical Line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent"></div>

          {items.map((item) => (
            <div key={item.id} className="relative pl-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Timeline Dot */}
              <div className="absolute left-[9px] top-1.5 size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,225,255,0.8)]"></div>
              
              <div className="bg-matte-surface p-5 rounded-2xl border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Timestamp</p>
                    <p className="text-sm font-medium text-slate-200">{item.timestamp}</p>
                  </div>
                  <div className="bg-primary/10 px-2 py-1 rounded text-[9px] font-bold text-primary uppercase tracking-tighter">
                    {item.duration}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined !text-[14px]">location_on</span>
                  <span className="text-[11px] font-medium">
                    {item.coords.lat.toFixed(4)}, {item.coords.lng.toFixed(4)}
                  </span>
                </div>

                <button 
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${item.coords.lat},${item.coords.lng}`)}
                  className="w-full py-2 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
