import { useEffect, useRef } from 'react'
export const useScrollToLastElement = (dependencies, behavior = 'smooth') => {
  const lastElementRef = useRef(null)

  useEffect(() => {
    // Cкролл к последнему элементу'
    lastElementRef.current?.scrollIntoView({
      block: 'nearest',
      behavior,
    })
  }, [dependencies, behavior])

  return lastElementRef
}
