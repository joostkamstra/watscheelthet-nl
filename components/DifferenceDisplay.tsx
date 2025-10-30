'use client';

import { Party } from '@/types';
import Image from 'next/image';

interface DifferenceDisplayProps {
  pvv: Party;
  d66: Party;
  difference: number;
  leader: 'pvv' | 'd66';
}

export default function DifferenceDisplay({ pvv, d66, difference, leader }: DifferenceDisplayProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Parties comparison */}
      <div className="grid grid-cols-2 gap-0">
        {/* PVV */}
        <div
          className={`p-6 sm:p-8 text-white transition-all ${
            leader === 'pvv' ? 'scale-105' : 'opacity-90'
          }`}
          style={{ backgroundColor: pvv.color }}
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">{pvv.name}</h2>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black">
              {pvv.votes.toLocaleString('nl-NL')}
            </div>
            <div className="text-lg sm:text-xl opacity-90">
              {pvv.seats} zetels
            </div>
            {leader === 'pvv' && (
              <div className="mt-4 text-sm sm:text-base font-semibold bg-white/20 rounded-full px-4 py-2 inline-block">
                🏆 Grootste partij
              </div>
            )}
          </div>
        </div>

        {/* D66 */}
        <div
          className={`p-6 sm:p-8 text-white transition-all ${
            leader === 'd66' ? 'scale-105' : 'opacity-90'
          }`}
          style={{ backgroundColor: d66.color }}
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">{d66.name}</h2>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black">
              {d66.votes.toLocaleString('nl-NL')}
            </div>
            <div className="text-lg sm:text-xl opacity-90">
              {d66.seats} zetels
            </div>
            {leader === 'd66' && (
              <div className="mt-4 text-sm sm:text-base font-semibold bg-white/20 rounded-full px-4 py-2 inline-block">
                🏆 Grootste partij
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Difference */}
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 sm:p-8 text-center border-t-4 border-slate-200">
        <div className="space-y-2">
          <div className="text-lg sm:text-xl text-slate-600 font-medium">
            Verschil
          </div>
          <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900">
            {difference.toLocaleString('nl-NL')}
          </div>
          <div className="text-base sm:text-lg text-slate-500">
            stemmen voorsprong voor {leader === 'pvv' ? pvv.name : d66.name}
          </div>
        </div>
      </div>

      {/* Leader photo section */}
      <div className="bg-white p-6 sm:p-8 border-t-2 border-slate-100">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Winner photo */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
            <Image
              src={leader === 'd66' ? '/jetten-happy.jpg' : '/wilders-happy.jpg'}
              alt={leader === 'd66' ? 'Rob Jetten blij' : 'Geert Wilders blij'}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Winner text */}
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
              {leader === 'd66' ? '🎉 Rob Jetten' : '🎉 Geert Wilders'}
            </div>
            <div className="text-lg sm:text-xl text-slate-700 font-medium">
              {leader === 'd66' ? 'D66 is de grootste partij!' : 'PVV is de grootste partij!'}
            </div>
          </div>

          {/* Loser photo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-300 shadow-lg opacity-60">
            <Image
              src={leader === 'd66' ? '/wilders-sad.jpg' : '/jetten-sad.jpg'}
              alt={leader === 'd66' ? 'Geert Wilders verdrietig' : 'Rob Jetten verdrietig'}
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
