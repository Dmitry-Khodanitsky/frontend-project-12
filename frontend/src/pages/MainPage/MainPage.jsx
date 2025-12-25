import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import {
  selectCurrentChannelId,
  setCurrentChannelId,
} from '@/app/model/uiSlice'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, Container } from 'react-bootstrap'
import { ChannelsList } from '@/features/channels/'
import { MessagesSection } from '@/features/messages/'

export const MainPage = () => {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const activeChannelId = useSelector(selectCurrentChannelId)

  // Получаем список каналов для установки дефолтного
  // в параметры передается undefined - потому что эндпоинт getChannels не принимает никаких параметров
  // в параметры передаем skip: Если это поле равно true, RTK Query не будет выполнять сетевой запрос.
  const { data: channels } = useGetChannelsQuery(undefined, { skip: !token })

  //Устаналвиваем активный канал после отрисовки
  useEffect(() => {
    // Если токен есть, каналы загружены, но активный канал еще не выбран
    if (channels?.length > 0 && !activeChannelId) {
      const defaultChannelId = channels[0].id
      dispatch(setCurrentChannelId(defaultChannelId))
    }
  }, [channels, activeChannelId, dispatch])

  const handleSelect = (id) => {
    dispatch(setCurrentChannelId(id))
  }

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
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
          <MessagesSection
            activeChannelId={activeChannelId}
            key={activeChannelId}
          />
        </div>
      </Tab.Container>
    </Container>
  )
}
