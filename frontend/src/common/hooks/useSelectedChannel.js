import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'

export const useSelectedChannel = (channelId) => {
  const { data: channels = [] } = useGetChannelsQuery()
  return channels.find((channel) => (channel.id === channelId))
}
