import { baseApi } from '@/app/api/baseApi'
import { socket } from '@/common/services/socket'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => 'channels',
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          // Сначала ждем завершения обработки первоначального запроса при монтировании компонента
          await cacheDataLoaded
          console.log('Соединение с каналами установлено', socket.id)

          // Когда данные получены из соединения с сервером,
          //Обновляем результат запроса полученным сообщением
          const handleNewChannel = (payload) => {
            //Просто добавляем новое сообщение в существующий массив в кэше
            // RTK Query сам уведомит компоненты об изменениях
            updateCachedData((draft) => {
              draft.push(payload)
            })
          }

          const handleRenameChannel = (payload) => {
            updateCachedData((draft) => {
              draft.push(payload)
            })
          }

          const handleRemoveChannel = (payload) => {
            updateCachedData((draft) => {
              return draft.filter((draft) => draft.id !== payload.id)
            })
          }
          socket.on('newChannel', handleNewChannel)
          socket.on('renameChannel', handleRenameChannel) //слушатель переименовывания канала
          socket.on('removeChannel', handleRemoveChannel) //слушатель удаления канала
        } catch (error) {
          // Если HTTP запрос завершился ошибкой, подписка не создастся
          console.log(error)
        }
        // Когда компонент с чатом размонтируется (или данные станут не нужны),
        // RTK Query автоматически выполнит этот код:
        await cacheEntryRemoved
        socket.off('newChannel')
        socket.off('renameChannel')
        socket.off('removeChannel')
      },
    }),
    // функции мутации
    addChannel: builder.mutation({
      query: (channel) => ({
        url: 'channels',
        method: 'POST',
        body: channel,
      }),
    }),
    removeChannel: builder.mutation({
      query: (id) => ({
        url: `channels/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetChannelsQuery,
  useAddChannelMutation,
  useRemoveChannelMutation,
} = channelsApi
