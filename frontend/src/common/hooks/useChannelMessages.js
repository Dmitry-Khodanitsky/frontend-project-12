import { useGetMessagesQuery } from '@/features/messages/api/messagesApi'

export const useChannelMessages = (channelId) => {
  const { data: messages = [], isError, isLoading } = useGetMessagesQuery()
  const channelMessages = messages.filter(
    (message) => message?.channelId === channelId
  )
  return {
    channelMessages,
    isError,
    isLoading,
  }
}
