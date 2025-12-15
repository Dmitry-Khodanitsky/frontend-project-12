import { baseApi } from '@/app/api/baseApi'
import { socket } from '@/common/services/socket'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => 'messages',
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
          socket.on('newMessage', handleNewMessage)
        } catch (error) {
          // Если HTTP запрос завершился ошибкой, подписка не создастся

          console.log(error)
        }
        // Когда компонент с чатом размонтируется (или данные станут не нужны),
        // RTK Query автоматически выполнит этот код:
        await cacheEntryRemoved
        socket.off('newMessage')
      },
    }),
    sendMessage: builder.mutation({
      query: (message) => ({
        url: 'messages',
        method: 'POST',
        body: message,
      }),
    }),
  }),
})

export const { useGetMessagesQuery, useSendMessageMutation } = channelsApi
