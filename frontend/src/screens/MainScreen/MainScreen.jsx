import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectToken } from '../../store/authSlice'

import ChannelsList from '../../components/ChannelsList/ChannelsList'
import ConversationSection from '../../components/ChatsList/ConversationSection'
import { Container, Row, Col } from 'react-bootstrap'

const MainScreen = () => {
  const token = useSelector(selectToken)

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Container fluid className="vh-100 p-0">
      <Tab.Container
        id="main-screen"
        defaultActiveKey={activeChannelId}
        onSelect={setActiveChannelId}
      >
        <div className="d-flex h-100">
          <ChannelsList />
          <ConversationSection channelId={activeChannelId} />
        </div>
      </Tab.Container>
    </Container>
  )
}

export default MainScreen
