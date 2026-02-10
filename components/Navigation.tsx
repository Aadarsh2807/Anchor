
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const tabs: { id: View; icon: string; label: string }[] = [
    { id: 'home', icon: 'home', label: 'HOME' },
    { id: 'history', icon: 'history', label: 'HISTORY' },
    { id: 'safety', icon: 'shield', label: 'SAFETY' },
    { id: 'profile', icon: 'person', label: 'PROFILE' },
  ];

  return (
    <nav className="absolute bottom-6 left-6 right-6 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => {
        const isActive = currentView === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              isActive ? 'text-primary' : 'text-slate-500'
            }`}
          >
            <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-primary/20 scale-110' : ''}`}>
              <span className={`material-symbols-outlined !text-[24px] ${isActive ? 'fill-1' : ''}`}>
                {tab.icon}
              </span>
            </div>
            {isActive && <span className="text-[10px] font-bold tracking-widest mt-0.5">{tab.label}</span>}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
