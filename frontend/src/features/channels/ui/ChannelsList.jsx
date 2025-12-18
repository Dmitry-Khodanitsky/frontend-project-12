import { Nav } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useScrollTo } from '@/common/hooks'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'
import { Loader, ShowModalButton } from '@/common/components'
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

  // использовать уведомление о том, что не удалось получить список каналов
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
      <div className="d-flex align-items-center justify-content-between bg-dark-subtle p-3 shadow">
        <b>Каналы</b>
        <ShowModalButton onClick={handleOpen} text={'＋'} />
        <AddChannelForm visible={visible} handleClose={handleClose} />
      </div>

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
        </div>
      )}
    </aside>
  )
}
