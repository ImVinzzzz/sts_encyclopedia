import { faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ALL_SERIES, StarTrekSeries } from '../../types/species';

interface SeriesFilterProps {
  selectedSeries: StarTrekSeries[];
  onToggleSeries: (series: StarTrekSeries) => void;
  onClear: () => void;
}

export default function SeriesFilter({ selectedSeries, onToggleSeries, onClear }: SeriesFilterProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <FontAwesomeIcon icon={faTv} className="text-lcars-blue text-sm" />
        <span className="font-lcars uppercase tracking-wide text-xs sm:text-sm text-lcars-blue">
          Filtra per Serie
        </span>
        {selectedSeries.length > 0 && (
          <button
            onClick={onClear}
            className="ml-auto text-[10px] sm:text-xs font-mono-lcars text-slate-400 hover:text-lcars-orange uppercase underline"
          >
            Azzera
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {ALL_SERIES.map((series) => {
          const isSelected = selectedSeries.includes(series);
          return (
            <button
              key={series}
              onClick={() => onToggleSeries(series)}
              className={`px-3 h-7 rounded-full text-[10px] sm:text-xs font-mono-lcars font-bold uppercase tracking-wider transition-colors ${
                isSelected
                  ? 'bg-lcars-blue text-slate-950'
                  : 'bg-slate-800 text-lcars-blue hover:bg-slate-700'
              }`}
            >
              {series}
            </button>
          );
        })}
      </div>
    </div>
  );
}
