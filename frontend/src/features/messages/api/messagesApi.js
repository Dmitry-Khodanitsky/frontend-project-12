import { baseApi } from '@/app/api/baseApi'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => 'messages',
    }),
    sendMessage: builder.mutation({
        query: (message) => ({
            url: 'messages',
            method: 'POST',
            body: message
        })
    })
  }),
})

export const { useGetMessagesQuery, useSendMessageMutation } = channelsApi
