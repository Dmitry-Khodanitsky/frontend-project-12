import { SectionTitle } from '@/common/components'
import MessagesList from './MessagesList'
import MessageTextarea from './MessageTextarea'

import { useSelectedChannel } from '@/common/hooks'

export const MessagesSection = ({ activeChannelId }) => {
  const selectedChannel = useSelectedChannel(activeChannelId)

  return (
    <div className="d-flex flex-column w-100 bg-dark-subtle ">
      <SectionTitle
        name={selectedChannel ? `# ${selectedChannel?.name}` : 'Выберите канал'}
        isEditable={false}
      />
      <div className="flex-grow-1 overflow-hidden">
        <div className="h-100 overflow-auto p-3">
          <MessagesList channelId={activeChannelId} />
        </div>
      </div>

      <div className="flex-shrink-0 p-3 pt-0">
        <MessageTextarea channel={selectedChannel} />
      </div>
    </div>
  )
}
