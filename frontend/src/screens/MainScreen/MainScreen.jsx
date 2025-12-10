import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectToken } from '../../store/authSlice'
import { Tab, Container } from 'react-bootstrap'
import ChannelsList from '../../components/ChannelsList/ChannelsList'
import ConversationSection from '../../components/ConversationSection/ConversationSection'
import { useState } from 'react'

const MainScreen = () => {
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
          <ConversationSection activeChannelId={activeChannelId} />
        </div>
      </Tab.Container>
    </Container>
  )
}

export default MainScreen
