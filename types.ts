
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  coords: Coordinates;
  duration: string;
  locationName: string;
}

export interface ParkedData {
  timestamp: string;
  coords: Coordinates;
}

export type View = 'home' | 'history' | 'safety' | 'profile' | 'settings';

export interface SafetyState {
  sentinelMode: boolean;
  intrusionDetection: boolean;
  proximityAlert: boolean;
  guardMode: boolean;
}
