'use client';

import { useEffect, useState } from 'react';
import { ElectionData } from '@/types';
import DifferenceDisplay from '@/components/DifferenceDisplay';
import ProgressBar from '@/components/ProgressBar';
import RemainingMunicipalities from '@/components/RemainingMunicipalities';
import HistoryChart from '@/components/HistoryChart';

export default function Home() {
  const [data, setData] = useState<ElectionData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('/data/results.json?t=' + Date.now());
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-2xl font-semibold text-slate-600">Laden...</div>
      </div>
    );
  }

  const difference = Math.abs(data.pvv.votes - data.d66.votes);
  const leader = data.pvv.votes > data.d66.votes ? 'pvv' : 'd66';
  const lastUpdateDate = new Date(data.lastUpdate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Wat Scheelt Het?
          </h1>
          <p className="text-lg sm:text-xl text-slate-600">
            PVV vs D66 • Tweede Kamerverkiezingen 2025
          </p>
        </div>

        {/* Main difference display */}
        <DifferenceDisplay
          pvv={data.pvv}
          d66={data.d66}
          difference={difference}
          leader={leader}
        />

        {/* Progress bar */}
        <ProgressBar percentage={data.percentageCounted} />

        {/* History chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Verloop verschil
          </h2>
          <HistoryChart history={data.history} />
        </div>

        {/* Remaining municipalities */}
        <RemainingMunicipalities municipalities={data.remainingMunicipalities} />

        {/* Last update */}
        <div className="text-center text-sm text-slate-500">
          Laatste update: {lastUpdateDate.toLocaleString('nl-NL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pt-8 border-t border-slate-200">
          <p>
            Data wordt handmatig bijgewerkt • Bron: NOS
          </p>
        </div>
      </div>
    </div>
  );
}
