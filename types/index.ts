export interface Party {
  name: string;
  votes: number;
  seats: number;
  color: string;
}

export interface HistoryPoint {
  timestamp: string;
  pvv: number;
  d66: number;
  difference: number;
}

export interface ElectionData {
  lastUpdate: string;
  pvv: Party;
  d66: Party;
  percentageCounted: number;
  remainingMunicipalities: string[];
  history: HistoryPoint[];
}
