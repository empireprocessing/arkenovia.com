import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

/** Internal navigation that scrolls smoothly to top. */
export function useGo() {
  const navigate = useNavigate()
  return (path: string) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

/** Scroll-reveal hook: returns a ref + className flag. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, shown }
}
