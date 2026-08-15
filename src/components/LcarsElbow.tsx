interface LcarsElbowProps {
  corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  color?: string
  className?: string
}

const cornerRadius: Record<LcarsElbowProps['corner'], string> = {
  'top-left': 'rounded-tl-[3.5rem]',
  'top-right': 'rounded-tr-[3.5rem]',
  'bottom-left': 'rounded-bl-[3.5rem]',
  'bottom-right': 'rounded-br-[3.5rem]',
}

/**
 * Il classico "gomito" LCARS: una barra spessa con un angolo arrotondato
 * asimmetrico, usata per incorniciare pannelli e sezioni.
 */
export default function LcarsElbow({ corner, color = 'bg-lcars-orange', className = '' }: LcarsElbowProps) {
  return (
    <div
      className={`h-10 w-full ${cornerRadius[corner]} ${color} ${className}`}
      aria-hidden="true"
    />
  )
}
