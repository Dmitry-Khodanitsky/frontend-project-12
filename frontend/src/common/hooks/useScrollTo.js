// хук для автоматического скролла к определенному элементу

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

// Где используется:
// MessagesList - для автоматического скролла вниз при добавлении нового сообщения
// ChannelList - для автоматического скролла к выбранному каналу
