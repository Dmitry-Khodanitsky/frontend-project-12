import MessagesList from './MessagesList'
import MessageTextarea from './MessageTextarea'
import { useSelectedChannel } from '@/common/hooks'

export const MessagesSection = ({ activeChannelId }) => {
  const selectedChannel = useSelectedChannel(activeChannelId)

  return (
    <div className="d-flex flex-column w-100 bg-dark-subtle ">
      <div className="p-3 shadow">
        {selectedChannel && <b>{`# ${selectedChannel?.name}`}</b>}
      </div>

      <div className="flex-grow-1 overflow-hidden">
        <div className="h-100 overflow-auto p-3">
          <MessagesList channelId={selectedChannel?.id} />
        </div>
      </div>

      <div className="flex-shrink-0 p-3 pt-0">
        <MessageTextarea channel={selectedChannel} />
      </div>
    </div>
  )
}
