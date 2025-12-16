import { useEffect, useRef } from 'react'
export const useScrollTo = (dependencies, behavior = 'smooth') => {
  const elementRef = useRef(null)

  useEffect(() => {
    // Cкролл к последнему элементу'
    elementRef.current?.scrollIntoView({
      block: 'nearest',
      behavior,
    })
  }, [dependencies, behavior])

  return elementRef
}
