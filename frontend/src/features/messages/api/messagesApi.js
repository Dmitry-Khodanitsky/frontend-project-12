import { baseApi } from '@/app/api/baseApi'
import { socket } from '@/common/services/socket'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['messages'],
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          // Сначала ждем завершения обработки первоначального запроса при монтировании компонента
          await cacheDataLoaded
          console.log('Соединение установлено', socket.id)

          // Когда данные получены из соединения с сервером,
          //Обновляем результат запроса полученным сообщением
          const handleNewMessage = (payload) => {
            //Просто добавляем новое сообщение в существующий массив в кэше
            // RTK Query сам уведомит компоненты об изменениях
            updateCachedData((draft) => {
              draft.push(payload)
            })
          }

          const handleRemoveMessage = (payload) => {
            updateCachedData((draft) => {
              return draft.filter((draft) => draft.id !== payload.id)
            })
          }
          socket.on('newMessage', handleNewMessage)
          socket.on('removeMessage', handleRemoveMessage)
        } catch (error) {
          // Если HTTP запрос завершился ошибкой, подписка не создастся

          console.log(error)
        }
        // Когда компонент с чатом размонтируется (или данные станут не нужны),
        // RTK Query автоматически выполнит этот код:
        await cacheEntryRemoved
        socket.off('newMessage')
        socket.off('removeMessage')
      },
    }),
    sendMessage: builder.mutation({
      query: (message) => ({
        url: 'messages',
        method: 'POST',
        body: message,
      }),
    }),
    removeMessage: builder.mutation({
      query: (id) => ({
        url: `messages/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetMessagesQuery,
  useSendMessageMutation,
  useRemoveMessageMutation,
} = channelsApi
