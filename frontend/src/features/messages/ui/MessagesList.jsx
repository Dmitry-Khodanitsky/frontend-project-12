import { useEffect, useRef } from 'react'
import MessageItem from './MessageItem'
import { Loader } from '@/common/components/'
import { useChannelMessages, useScrollTo } from '@/common/hooks'

const MessagesList = ({ channelId }) => {
  const { channelMessages, error, isLoading } = useChannelMessages(channelId)

  const lastMessageRef = useScrollTo(channelMessages, 'auto')

  if (!channelId) return <h4>Кажется мы не смогли найти такой канал</h4>

  if (error) {
    return <h4>Что-то пошло не так</h4>
  }

  return (
    <div style={{ minHeight: '100%' }}>
      {isLoading ? (
        <Loader />
      ) : (
        channelMessages.map((message) => (
          <MessageItem
            key={message.id}
            username={message.username}
            text={message.body}
          />
        ))
      )}
      {/* якорь для автоматического скрола вниз к последнему сообщению */}
      <div ref={lastMessageRef} className="scrollAnchor" />
    </div>
  )
}

export default MessagesList
