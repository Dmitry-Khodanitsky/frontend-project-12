import { Nav } from 'react-bootstrap'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { SectionTitle, Loader } from '@/common/components'
import ChannelItem from './ChannelItem'
import { useScrollTo } from '@/common/hooks'
import { useContext } from 'react'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'

export const ChannelsList = () => {
  const { data: channels, isError, isLoading } = useGetChannelsQuery()
  const { activeChannelId } = useContext(ActiveChannelIdContext)
  const activeChannelRef = useScrollTo(activeChannelId)

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
      <SectionTitle name="Каналы" isEditable={true} />
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
