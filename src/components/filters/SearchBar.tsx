import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex-1 min-w-[220px]">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-lcars-orange text-sm"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cerca per nome, pianeta o descrizione..."
        className="w-full bg-slate-900 border-2 border-lcars-orange/50 focus:border-lcars-orange rounded-full py-2.5 pl-11 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none font-mono-lcars tracking-wide transition-colors"
      />
    </div>
  );
}
