
import React, { useState, useEffect, useCallback } from 'react';
import { View, ParkedData, HistoryItem, SafetyState } from './types';
import Home from './pages/Home';
import Settings from './pages/Settings';
import History from './pages/History';
import Safety from './pages/Safety';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [parkedData, setParkedData] = useState<ParkedData | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [safety, setSafety] = useState<SafetyState>({
    sentinelMode: true,
    intrusionDetection: true,
    proximityAlert: false,
    guardMode: true,
  });
  
  const [isHighAccuracy, setIsHighAccuracy] = useState(true);
  const [isOfflineSync, setIsOfflineSync] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    const savedParked = localStorage.getItem('anchor_parked_data');
    if (savedParked) setParkedData(JSON.parse(savedParked));

    const savedHistory = localStorage.getItem('anchor_history');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  const handlePark = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const dateStr = new Date().toLocaleDateString([], { month: 'short', day: 'numeric' });
          
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          const newData: ParkedData = { timestamp, coords };
          setParkedData(newData);
          localStorage.setItem('anchor_parked_data', JSON.stringify(newData));

          // Update History
          const newHistoryItem: HistoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: `${dateStr}, ${timestamp}`,
            coords,
            duration: "Ongoing",
            locationName: "Current Sector"
          };
          
          const updatedHistory = [newHistoryItem, ...history].slice(0, 10);
          setHistory(updatedHistory);
          localStorage.setItem('anchor_history', JSON.stringify(updatedHistory));
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        { enableHighAccuracy: isHighAccuracy }
      );
    }
  }, [isHighAccuracy, history]);

  const handleClear = () => {
    setParkedData(null);
    localStorage.removeItem('anchor_parked_data');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            parkedData={parkedData} 
            onPark={handlePark} 
            onClear={handleClear} 
            onOpenSettings={() => setCurrentView('settings')}
          />
        );
      case 'history':
        return <History items={history} />;
      case 'safety':
        return <Safety state={safety} setState={setSafety} />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return (
          <Settings 
            onBack={() => setCurrentView('home')} 
            highAccuracy={isHighAccuracy}
            setHighAccuracy={setIsHighAccuracy}
            offlineSync={isOfflineSync}
            setOfflineSync={setIsOfflineSync}
          />
        );
      default:
        return <Home parkedData={parkedData} onPark={handlePark} onClear={handleClear} onOpenSettings={() => setCurrentView('settings')} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen relative flex flex-col bg-background-dark font-sans overflow-hidden border-x border-white/5">
      <main className="flex-1 overflow-y-auto custom-scrollbar pb-24">
        {renderView()}
      </main>

      {currentView !== 'settings' && (
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
      )}

      {/* Background decor */}
      <div className="fixed top-[-10%] right-[-10%] size-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-10%] size-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </div>
  );
};

export default App;
