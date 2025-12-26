import { baseApi } from '@/app/api/baseApi'
import { subscribeToEvent } from '@/common/services/socket/subscribeToEvent'
import { profanityClean } from '@/common/services/profanity'

export const messagesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['messages'],
      // Слушатель сокетов для синхронизации кэша. Обновляет список каналов мгновенно, когда другие пользователи вносят изменения.
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) {
        try {
          // Сначала ждем завершения обработки первоначального запроса при монтировании компонента
          await cacheDataLoaded

          // Когда данные получены из соединения с сервером,
          // Обновляем результат запроса полученным сообщением
          const handleNewMessage = (payload) => {
            // Просто добавляем новое сообщение в существующий массив в кэше
            // RTK Query сам уведомит компоненты об изменениях
            updateCachedData((draft) => {
              const cleanMessage = {
                ...payload,
                body: profanityClean(payload.body),
              }
              draft.push(cleanMessage)
            })
          }

          const handleRemoveMessage = (payload) => {
            updateCachedData((draft) => {
              return draft.filter(draft => draft.id !== payload.id)
            })
          }
          const unsubscribeNewMessage = subscribeToEvent(
            'newMessage',
            handleNewMessage,
          )
          const unsubscribeRemoveMessage = subscribeToEvent(
            'removeMessage',
            handleRemoveMessage,
          )

          // Когда компонент с чатом размонтируется (или данные станут не нужны),
          // RTK Query автоматически выполнит этот код:
          await cacheEntryRemoved
          unsubscribeNewMessage()
          unsubscribeRemoveMessage()
        }
        catch (error) {
          // Если HTTP запрос завершился ошибкой, подписка не создастся
          console.log(error)
        }
      },
    }),
    sendMessage: builder.mutation({
      query: message => ({
        url: 'messages',
        method: 'POST',
        body: { ...message, body: profanityClean(message.body) },
      }),
    }),
    removeMessage: builder.mutation({
      query: id => ({
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
} = messagesApi
