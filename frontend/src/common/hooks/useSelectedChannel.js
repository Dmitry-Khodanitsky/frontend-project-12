import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'

export const useSelectedChannel = (channelId) => {
  const { data: channels = [] } = useGetChannelsQuery()

  if (channels.length === 0) return null

  const selectedChannel =
    channels.find((channel) => channel.id === channelId) || channels[0]

  return selectedChannel
}
