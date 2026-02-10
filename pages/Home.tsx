
import React from 'react';
import { ParkedData } from '../types';

interface HomeProps {
  parkedData: ParkedData | null;
  onPark: () => void;
  onClear: () => void;
  onOpenSettings: () => void;
}

const Home: React.FC<HomeProps> = ({ parkedData, onPark, onClear, onOpenSettings }) => {
  return (
    <div className="flex flex-col px-6 py-8 min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-[0.4em] uppercase">ANCHOR</h1>
          <div className="h-0.5 w-12 bg-primary mt-1"></div>
        </div>
        <button 
          onClick={onOpenSettings}
          className="size-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      {!parkedData ? (
        // Drop Anchor View
        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
          {/* Main Action Button */}
          <div className="relative group">
            {/* Outer Ring 1 */}
            <div className="absolute inset-[-40px] border border-white/5 rounded-full opacity-40"></div>
            {/* Outer Ring 2 */}
            <div className="absolute inset-[-20px] border border-white/10 rounded-full bg-primary/5"></div>
            
            <button 
              onClick={onPark}
              className="relative size-48 rounded-full bg-matte-surface border border-white/10 flex flex-col items-center justify-center space-y-4 group-active:scale-95 transition-all glow-cyan"
            >
              <div className="size-16 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-[0_0_30px_rgba(0,225,255,0.6)]">
                <span className="material-symbols-outlined !text-[32px] fill-1">location_on</span>
              </div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Park Here</span>
            </button>
          </div>

          <div className="text-center space-y-4 max-w-[280px]">
            <h2 className="text-xl font-light">Ready to drop anchor?</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Tap to save your current position using high-accuracy GPS
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
            <div className="size-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">GPS Signal Strong</span>
          </div>
        </div>
      ) : (
        // Vehicle Secured View
        <div className="flex-1 space-y-8 animate-in fade-in duration-500">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="size-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,225,255,0.2)]">
              <span className="material-symbols-outlined !text-[40px] text-primary fill-1">shield</span>
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-medium tracking-tight">Vehicle Secured</h2>
              <p className="text-xs text-primary font-bold tracking-[0.2em] uppercase">Live Monitoring Active</p>
            </div>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-matte-surface p-6 space-y-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Parked Since</p>
              <p className="text-2xl font-bold">{parkedData.timestamp}</p>
            </div>
            <div className="bg-matte-surface p-6 space-y-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Status</p>
              <p className="text-2xl font-bold text-primary">Active</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-matte-surface p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary !text-[20px]">location_on</span>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Current Coordinates</p>
                <p className="text-sm font-medium text-slate-200">
                  {Math.abs(parkedData.coords.lat).toFixed(4)}° {parkedData.coords.lat >= 0 ? 'N' : 'S'}, 
                  {' '}{Math.abs(parkedData.coords.lng).toFixed(4)}° {parkedData.coords.lng >= 0 ? 'E' : 'W'}
                </p>
              </div>
            </div>

            {/* Static Map Mockup */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 grayscale">
              <img 
                src={`https://picsum.photos/seed/${parkedData.coords.lat}/800/450`} 
                className="w-full h-full object-cover opacity-40" 
                alt="Map area"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              {/* Pulsing Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="size-4 rounded-full border-2 border-primary animate-ping opacity-75"></div>
                <div className="absolute inset-0 size-4 rounded-full border-2 border-primary bg-primary/20"></div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button 
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${parkedData.coords.lat},${parkedData.coords.lng}`)}
              className="w-full py-4 bg-primary text-background-dark font-bold text-sm tracking-[0.1em] uppercase rounded-xl flex items-center justify-center gap-2 glow-cyan-strong active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined !text-[18px]">directions_car</span>
              Find My Car
            </button>
            <button 
              onClick={onClear}
              className="w-full py-4 border border-white/10 text-slate-500 font-bold text-sm tracking-[0.1em] uppercase rounded-xl hover:text-white hover:border-white/20 transition-all"
            >
              Clear Location
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
