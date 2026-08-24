import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface FooterProps {
  showEditorButton?: boolean;
}

export default function Footer({ showEditorButton = true }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-lcars-purple/40 bg-slate-950/60 px-5 py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="max-w-3xl text-center font-mono-lcars text-[10px] leading-relaxed tracking-wide text-slate-400 sm:text-left sm:text-xs">
          Sito amatoriale senza fini di lucro. Non si intende infrangere alcun copyright.
          <br />
          Star Trek e tutti i marchi registrati appartengono ai rispettivi proprietari.
        </p>

        {showEditorButton && (
          <a
            href="#/editor"
            className="flex shrink-0 items-center gap-2 rounded-full bg-lcars-purple px-5 py-2.5 font-lcars text-sm uppercase tracking-wide text-slate-950 transition hover:bg-lcars-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-lcars-blue"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
            Apri editor
          </a>
        )}
      </div>
    </footer>
  );
}
