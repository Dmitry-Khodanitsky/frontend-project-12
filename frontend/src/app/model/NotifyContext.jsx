import { NotificationToast } from '@/common/components'
import { createContext, useContext, useState, useCallback } from 'react'

const NotifyContext = createContext(null)

export const NotifyProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const showNotification = useCallback((message, variant) => {
    const id = Date.now()
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message, variant },
    ])
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    )
  }, [])

  return (
    <NotifyContext.Provider value={showNotification}>
      {children}
      <NotificationToast
        notifications={notifications}
        onRemove={removeNotification}
      />
    </NotifyContext.Provider>
  )
}

export const useNotification = () => useContext(NotifyContext)
