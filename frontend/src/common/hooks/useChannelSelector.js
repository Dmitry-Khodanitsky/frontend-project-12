import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useEffect, useMemo } from 'react'
import { setCurrentChannelId } from '@/app/model/uiSlice'
import { useDispatch } from 'react-redux'

export const useChannelSelector = (channelId) => {
  const { data: channels = [] } = useGetChannelsQuery()
  const dispatch = useDispatch()

  const selectedChannel = useMemo(() => {
    return channels.find((channel) => channel.id === channelId)
  }, [channels, channelId])

  //Синхронизируем состояние ID в контексте (срабатывает после рендера)
  useEffect(() => {
    // Если selectedChannel не найден (удален или не существует) то активный канал становится general (id: 1)
    if (channels.length > 0 && !selectedChannel) {
      dispatch(setCurrentChannelId('1'))
    }
  }, [channels, selectedChannel, dispatch])

  if (channels.length === 0) return null
  return selectedChannel || channels[0]
}

// используется в messageSection для автоматического переключения на дефолтный канал, если выбранный каланал был удален вместе с сообщениями
