'use client';

interface RemainingMunicipalitiesProps {
  municipalities: string[];
}

export default function RemainingMunicipalities({ municipalities }: RemainingMunicipalitiesProps) {
  if (municipalities.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
        Nog te tellen
      </h3>

      <ul className="space-y-3">
        {municipalities.map((municipality, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <span className="text-base sm:text-lg text-slate-700 font-medium">
              {municipality}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 text-sm text-slate-500 text-center">
        Deze gemeentes en stemmen worden nog verwerkt
      </div>
    </div>
  );
}
