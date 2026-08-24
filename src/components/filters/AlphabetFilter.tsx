const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface AlphabetFilterProps {
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
  availableLetters: Set<string>;
}

export default function AlphabetFilter({
  selectedLetter,
  onSelectLetter,
  availableLetters,
}: AlphabetFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <button
        onClick={() => onSelectLetter('ALL')}
        className={`h-9 px-3 rounded-full font-lcars text-xs sm:text-sm uppercase tracking-wide transition-colors ${
          selectedLetter === 'ALL'
            ? 'bg-lcars-gold text-slate-950'
            : 'bg-slate-800 text-lcars-gold hover:bg-slate-700'
        }`}
      >
        ALL
      </button>
      {LETTERS.map((letter) => {
        const isAvailable = availableLetters.has(letter);
        const isSelected = selectedLetter === letter;
        return (
          <button
            key={letter}
            onClick={() => isAvailable && onSelectLetter(letter)}
            disabled={!isAvailable}
            className={`h-9 w-9 rounded-full font-lcars text-sm uppercase transition-colors ${
              isSelected
                ? 'bg-lcars-orange text-slate-950'
                : isAvailable
                ? 'bg-slate-800 text-lcars-orange hover:bg-slate-700'
                : 'bg-slate-900 text-slate-700 cursor-not-allowed'
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
