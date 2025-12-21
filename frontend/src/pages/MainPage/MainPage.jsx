import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import { currentChannenId, setCurrentChannelId } from '@/app/model/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Container } from 'react-bootstrap'
import { ChannelsList } from '@/features/channels/'
import { MessagesSection } from '@/features/messages/'

export const MainPage = () => {
  const token = useSelector(selectToken)

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  const dispatch = useDispatch()
  const activeChannelId = useSelector(currentChannenId)
  const handleSelect = (id) => {
    dispatch(setCurrentChannelId(id))
  }

  return (
    <Container fluid className="h-100 p-0">
      <Tab.Container
        id="main-screen"
        activeKey={activeChannelId}
        onSelect={handleSelect}
      >
        <div className="d-flex h-100">
          <ChannelsList />
          <MessagesSection activeChannelId={activeChannelId} />
        </div>
      </Tab.Container>
    </Container>
  )
}
