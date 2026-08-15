import { useState, useEffect, type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../utils/icons'

export const ScrollToTop: FC = () => {
  const [visibile, setVisibile] = useState(false)

  useEffect(() => {
    const gestisciScroll = () => {
      if (window.scrollY > 300) {
        setVisibile(true)
      } else {
        setVisibile(false)
      }
    }

    window.addEventListener('scroll', gestisciScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', gestisciScroll)
    }
  }, [])

  const scorriInCima = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visibile) {
    return null
  }

  const classiPulsante =
    'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center ' +
    'rounded-full border-2 border-lcars-amber bg-void-900/90 text-lcars-amber ' +
    'shadow-lg shadow-lcars-orange/30 backdrop-blur-md transition-all duration-300 ' +
    'hover:scale-110 hover:border-lcars-orange hover:bg-lcars-amber hover:text-void-950 ' +
    'active:scale-95 focus-visible:outline-none'

  return (
    <button
      type="button"
      onClick={scorriInCima}
      className={classiPulsante}
      title="Torna all'inizio della pagina"
      aria-label="Torna all'inizio della pagina"
    >
      <FontAwesomeIcon icon={icons.arrowUp} className="h-5 w-5" />
    </button>
  )
}

export default ScrollToTop
