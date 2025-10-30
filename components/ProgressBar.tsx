'use client';

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stemmen geteld
          </h3>
          <span className="text-3xl sm:text-4xl font-black text-slate-900">
            {percentage}%
          </span>
        </div>

        <div className="relative w-full h-6 sm:h-8 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        <div className="text-sm sm:text-base text-slate-500 text-center">
          {percentage < 100 ? (
            <>Nog <span className="font-bold">{(100 - percentage).toFixed(1)}%</span> te tellen</>
          ) : (
            <span className="font-bold text-green-600">✓ Alle stemmen geteld</span>
          )}
        </div>
      </div>
    </div>
  );
}
