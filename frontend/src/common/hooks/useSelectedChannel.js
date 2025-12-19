import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useContext, useEffect, useMemo } from 'react'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'

export const useSelectedChannel = (channelId) => {
  const { data: channels = [] } = useGetChannelsQuery()
  const { setActiveChannelId } = useContext(ActiveChannelIdContext)

  const selectedChannel = useMemo(() => {
    return channels.find((channel) => channel.id === channelId)
  }, [channels, channelId])

  //Синхронизируем состояние ID в контексте (срабатывает после рендера)
  useEffect(() => {
    // Если selectedChannel не найден (удален или не существует) то активный канал становится general (id: 1)
    if (channels.length > 0 && !selectedChannel) {
      setActiveChannelId('1')
    }
  }, [channels, selectedChannel, setActiveChannelId])

  if (channels.length === 0) return null
  return selectedChannel || channels[0]
}
