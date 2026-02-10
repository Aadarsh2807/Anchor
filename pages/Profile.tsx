
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col px-6 py-8 min-h-full">
      <header className="mb-8">
        <h1 className="text-xl font-bold tracking-[0.4em] uppercase">Profile</h1>
        <div className="h-0.5 w-12 bg-primary mt-1"></div>
      </header>

      <div className="space-y-8">
        {/* User Card */}
        <div className="relative bg-matte-surface rounded-3xl border border-white/10 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
             <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-primary/30">
               Elite Tier
             </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative size-20">
                <div className="absolute inset-0 bg-primary/20 rounded-[25%] rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-matte-surface border border-white/20 rounded-[25%] rotate-[15deg]">
                  <span className="material-symbols-outlined !text-[32px] text-slate-300 -rotate-[15deg]">person</span>
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">Commander</h2>
                <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">ID: ANCH-092-X</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Total Anchored</p>
                <p className="text-lg font-bold">1,248 hrs</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Security Level</p>
                <p className="text-lg font-bold">Level 4</p>
              </div>
            </div>
          </div>
          
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>

        {/* Vehicle Management */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Active Assets</h3>
          
          <div className="bg-matte-surface p-6 rounded-2xl border border-white/5 flex items-center justify-between hover:border-white/20 transition-all cursor-pointer">
            <div className="flex items-center gap-5">
               <div className="size-12 rounded-full bg-white/5 flex items-center justify-center">
                 <span className="material-symbols-outlined !text-[24px] text-slate-400">directions_car</span>
               </div>
               <div>
                 <p className="text-sm font-bold tracking-tight">Interceptor 01</p>
                 <p className="text-[10px] text-primary font-bold tracking-widest uppercase">Cyber-Sedan S</p>
               </div>
            </div>
            <span className="material-symbols-outlined text-slate-600">chevron_right</span>
          </div>

          <button className="w-full py-4 border border-dashed border-white/10 rounded-2xl text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-white hover:border-white/20 transition-all">
            + Register New Vehicle
          </button>
        </div>

        {/* App Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Uptime', val: '99.9%' },
            { label: 'Latency', val: '12ms' },
            { label: 'Nodes', val: 'Global' },
          ].map((stat) => (
            <div key={stat.label} className="bg-matte-surface p-4 rounded-xl border border-white/5 text-center space-y-1">
              <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
              <p className="text-xs font-bold text-slate-200">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
