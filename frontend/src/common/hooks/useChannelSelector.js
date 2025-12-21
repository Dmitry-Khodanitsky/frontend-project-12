// хук для получения активного канала по id, если id не существует то возвращается дефолтный канал

import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useEffect, useMemo } from 'react'
import { useChannelId } from './useChannelId'

export const useChannelSelector = (channelId) => {
  const { data: channels = [] } = useGetChannelsQuery()
  const { setCurrentChannelId } = useChannelId()

  const selectedChannel = useMemo(() => {
    return channels.find((channel) => channel.id === channelId)
  }, [channels, channelId])

  useEffect(() => {
    // Если selectedChannel не найден (удален или не существует) то активный канал становится general (id: 1)
    if (channels.length > 0 && !selectedChannel) {
      setCurrentChannelId('1')
    }
  }, [channels, selectedChannel, setCurrentChannelId])

  if (channels.length === 0) return null
  return selectedChannel || channels[0]
}

// Где используется:
// в messageSection для автоматического переключения на дефолтный канал, если выбранный каланал был удален вместе с сообщениями
