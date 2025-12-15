import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import { Tab, Container } from 'react-bootstrap'
import { ChannelsList } from '@/features/channels/'
import { MessagesSection } from '@/features/messages/'
import { useState } from 'react'

export const MainPage = () => {
  const [activeChannelId, setActiveChannelId] = useState('1')
  const token = useSelector(selectToken)

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Container fluid className="h-100 p-0">
      <Tab.Container
        id="main-screen"
        defaultActiveKey={activeChannelId}
        onSelect={setActiveChannelId}
      >
        <div className="d-flex h-100">
          <ChannelsList />
          <MessagesSection activeChannelId={activeChannelId} />
        </div>
      </Tab.Container>
    </Container>
  )
}
