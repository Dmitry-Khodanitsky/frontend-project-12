// хук для получения сообщений сообщений конкретного канала
import { useGetMessagesQuery } from '@/features/messages/api/messagesApi'

export const useChannelMessages = (channelId) => {
  const {
    data: messages = [],
    isError,
    isLoading,
    isFetching,
  } = useGetMessagesQuery()
  const channelMessages = messages.filter(
    (message) => String(message?.channelId) === String(channelId)
  )
  return {
    channelMessages,
    isError,
    isLoading: isLoading || isFetching,
  }
}

// Где используется:
//В MessagesList для отрисовки сообщений активного канала
