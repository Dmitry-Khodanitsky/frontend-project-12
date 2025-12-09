import { useState, useMemo } from 'react'
import { ActiveChannelIdContext } from './channelContext'

export const ActiveChannelIdProvider = ({ children }) => {
  const [activeChannelId, setActiveChannelId] = useState('1')

  const providerValue = useMemo(
    () => ({
      activeChannelId,
      setActiveChannelId,
    }),
    [activeChannelId]
  )
  return (
    <ActiveChannelIdContext.Provider value={providerValue}>
      {children}
    </ActiveChannelIdContext.Provider>
  )
}
