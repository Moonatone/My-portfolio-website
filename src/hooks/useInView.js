import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isInView] — attach ref to an element, isInView flips to
 * true once it scrolls into the viewport (and stays true after that).
 */
export default function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isInView]
}
