import { baseApi } from '@/app/api/baseApi'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => 'channels',
    }),
  }),
})

export const { useGetChannelsQuery } = channelsApi
