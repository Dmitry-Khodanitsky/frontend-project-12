import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useScrollTo, useChannelId } from '@/common/hooks'
import { Loader, ShowModalButton, ErrorMessage } from '@/common/components'
import ChannelItem from './ChannelItem'
import { AddChannelForm } from '..'
import { useNotification } from '@/app/model/NotifyContext'

export const ChannelsList = () => {
  const { data: channels, isError, isLoading } = useGetChannelsQuery()
  const { activeChannelId } = useChannelId()
  const activeChannelRef = useScrollTo(activeChannelId)
  const showNotification = useNotification()

  //хуки и обработчики для работы с модальным окном добавления каналов
  const [visible, setVisible] = useState(false)
  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  useEffect(() => {
    if (isError) {
      showNotification('Ошибка, каналы не загрузились', 'danger')
    }
  }, [isError])

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
      ) : isError ? (
        <ErrorMessage message={'Ошибка, каналы не загрузились'} />
      ) : (
        <div className="flex-grow-1 overflow-auto">
          <Nav
            as="ul"
            variant="pills"
            className="flex-column flex-grow-1 overflow-auto"
          >
            {channels.map((channel) => {
              const ref =
                channel.id === activeChannelId ? activeChannelRef : null
              return (
                <ChannelItem
                  key={channel.id}
                  channel={channel}
                  ref={ref}
                ></ChannelItem>
              )
            })}
          </Nav>
        </div>
      )}
    </aside>
  )
}
