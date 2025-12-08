import { useSelector } from 'react-redux'
import { selectActualChannel } from '../store/channelsSlice'
import { selectChannels } from '../store/channelsSlice'
import { selectMessages } from '../store/messagesSlice'

export const useSelectedChannel = () => {
  const channelId = useSelector(selectActualChannel)
  const allChannels = useSelector(selectChannels)
  const allMessages = useSelector(selectMessages)
  const channelMessages = allMessages.filter(
    (chat) => chat.channelId === channelId
  )
  const selectedChannel = allChannels.find(
    (channel) => channel.id === channelId
  )
  return { channelMessages, selectedChannel }
}


