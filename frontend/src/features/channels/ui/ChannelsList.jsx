import { Nav } from 'react-bootstrap'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { SectionTitle, Loader } from '@/common/components'
import ChannelItem from './ChannelItem'
import { useScrollTo } from '@/common/hooks'
import { useContext } from 'react'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'
import { Loader, ModalButton } from '@/common/components'
import ChannelItem from './ChannelItem'
import { AddChannelForm } from '..'

export const ChannelsList = () => {
  const { data: channels, isError, isLoading } = useGetChannelsQuery()
  const { activeChannelId } = useContext(ActiveChannelIdContext)
  const activeChannelRef = useScrollTo(activeChannelId)

  //хуки и обработчики для работы с модальным окном добавления каналов
  const [visible, setVisible] = useState(false)
  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  if (isError)
    return (
      <aside className="border-end" style={{ width: '20%', minWidth: '120px' }}>
        <h1>Ошибка</h1>
      </aside>
    )

  return (
    <aside
      className="border-end d-flex flex-column h-100"
      style={{ width: '20%', minWidth: '120px' }}
    >
        <ModalButton onClick={handleOpen} text={'＋'} />
        <AddChannelForm visible={visible} handleClose={handleClose} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex-grow-1 overflow-auto">
          <Nav
            variant="pills"
            className="flex-column flex-grow-1 overflow-auto"
          >
            {channels.map((channel) => {
              const ref =
                channel.id === activeChannelId ? activeChannelRef : null
              return (
                <ChannelItem key={channel.id} id={channel.id} ref={ref}>
                  {`# ${channel.name}`}
                </ChannelItem>
              )
            })}
          </Nav>
          {/* якорь для автоматического скрола вниз к активному каналу */}
          {/* <div ref={lastMessageRef} className="scrollAnchor" /> */}
        </div>
      )}
    </aside>
  )
}
