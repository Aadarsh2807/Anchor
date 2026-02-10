
import React from 'react';

interface SettingsProps {
  onBack: () => void;
  highAccuracy: boolean;
  setHighAccuracy: (val: boolean) => void;
  offlineSync: boolean;
  setOfflineSync: (val: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ 
  onBack, 
  highAccuracy, 
  setHighAccuracy, 
  offlineSync, 
  setOfflineSync 
}) => {
  return (
    <div className="flex flex-col px-6 py-8 min-h-full animate-in slide-in-from-right duration-300">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-background-dark"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xs font-bold tracking-[0.4em] uppercase opacity-40">System Configuration</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 space-y-12">
        {/* Branding */}
        <section className="space-y-1">
          <h2 className="text-3xl font-light tracking-tight">Anchor<span className="text-primary font-bold">.</span></h2>
          <p className="text-sm text-slate-500 font-medium tracking-wide">Premium Utility OS</p>
        </section>

        {/* Settings List */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-base font-medium tracking-tight">High Accuracy Mode</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Enhanced GPS precision</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={highAccuracy} 
                onChange={() => setHighAccuracy(!highAccuracy)} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-800 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow-sm"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-base font-medium tracking-tight">Offline-First Sync</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Local-to-Cloud prioritization</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={offlineSync} 
                onChange={() => setOfflineSync(!offlineSync)} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-800 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow-sm"></div>
            </label>
          </div>

          <button className="flex items-center justify-between w-full group py-2 border-b border-white/5">
            <p className="text-base font-medium tracking-tight group-hover:text-primary transition-colors">Notification Preferences</p>
            <span className="material-symbols-outlined text-slate-600 group-hover:text-primary !text-[18px]">chevron_right</span>
          </button>
        </section>

        {/* Info Grid */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">System Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-matte-surface p-5 rounded-xl border border-white/5 space-y-1 shadow-sm">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Software Version</p>
              <p className="text-lg font-semibold text-slate-200">2.4.0</p>
            </div>
            <div className="bg-matte-surface p-5 rounded-xl border border-white/5 space-y-1 shadow-sm">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Developer</p>
              <p className="text-lg font-semibold text-slate-200">Anchor Sys.</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <button className="block text-sm text-slate-400 hover:text-primary transition-colors tracking-wide">Privacy Policy</button>
            <button className="block text-sm text-slate-400 hover:text-primary transition-colors tracking-wide">Terms of Service</button>
          </div>
        </section>
      </main>

      <footer className="mt-12 space-y-8">
        <button className="w-full py-4 border border-white/5 rounded-xl text-sm font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-red-400 hover:border-red-400/20 transition-all active:scale-[0.98]">
          Terminate Session
        </button>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,225,255,0.6)]"></div>
            <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">System Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Settings;
