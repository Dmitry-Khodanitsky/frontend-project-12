import React from 'react'
import { useState, useMemo } from 'react'

export const ActiveChannelIdContext = React.createContext()

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
