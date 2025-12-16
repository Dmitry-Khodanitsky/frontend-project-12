import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import { Tab, Container } from 'react-bootstrap'
import { ChannelsList } from '@/features/channels/'
import { MessagesSection } from '@/features/messages/'
import { useContext } from 'react'
import { ActiveChannelIdContext } from './model'

export const MainPage = () => {
  const { activeChannelId, setActiveChannelId } = useContext(
    ActiveChannelIdContext
  )

  const token = useSelector(selectToken)

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Container fluid className="h-100 p-0">
      <Tab.Container
        id="main-screen"
        activeKey={activeChannelId}
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
