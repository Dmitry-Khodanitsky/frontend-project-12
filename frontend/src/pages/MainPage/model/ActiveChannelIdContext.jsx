import { useState, createContext } from 'react'

export const ActiveChannelIdContext = createContext()

export const ActiveChannelIdProvider = ({ children }) => {
  const [activeChannelId, setActiveChannelId] = useState('1')

  const providerValue = { activeChannelId, setActiveChannelId }
  return (
    <ActiveChannelIdContext.Provider value={providerValue}>
      {children}
    </ActiveChannelIdContext.Provider>
  )
}
