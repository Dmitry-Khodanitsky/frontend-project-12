import MessageItem from './MessageItem'
import { Loader, ErrorMessage } from '@/common/components/'
import { useChannelMessages, useScrollTo } from '@/common/hooks'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useNotification } from '@/app/model/NotifyContext'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const MessagesList = ({ channelId }) => {
  const { error: channelsError } = useGetChannelsQuery()
  const {
    channelMessages,
    error: messagesError,
    isLoading,
  } = useChannelMessages(channelId)
  const showNotification = useNotification()

  const lastMessageRef = useScrollTo(channelMessages, 'auto')

  const { t } = useTranslation()

  useEffect(() => {
    if (channelsError) return
    if (messagesError) {
      showNotification(t('errors.messages'), 'danger')
    }
  }, [channelsError, messagesError])

  if (isLoading) return <Loader />
  if (messagesError) return <ErrorMessage message={t('errors.messages')} />

  return (
    <div style={{ minHeight: '100%' }}>
      {channelMessages?.map((message) => (
        <MessageItem
          key={message.id}
          username={message.username}
          text={message.body}
        />
      ))}
      {/* якорь для автоматического скрола вниз к последнему сообщению */}
      <div ref={lastMessageRef} className="scrollAnchor" />
    </div>
  )
}

export default MessagesList
