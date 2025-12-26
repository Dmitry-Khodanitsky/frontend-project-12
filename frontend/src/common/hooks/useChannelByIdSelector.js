import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'

export const useChannelByIdSelector = (id) => {
  const { data: channels } = useGetChannelsQuery()
  if (!id || !channels) return null
  return channels.find(channel => channel.id === id)
}

// Используется в RenameChannelModal
