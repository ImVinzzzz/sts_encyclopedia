import type { SeriesTag } from '../types/species'

export default function SeriesBadge({ tag }: { tag: SeriesTag }) {
  return (
    <span className="rounded-full bg-void-950/70 px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-wide text-lcars-skyblue">
      {tag}
    </span>
  )
}
