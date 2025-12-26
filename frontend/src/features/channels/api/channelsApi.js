import { baseApi } from '@/app/api/baseApi'
import { subscribeToEvent } from '@/common/services/socket/subscribeToEvent'
import { profanityClean } from '@/common/services/profanity'

export const channelsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getChannels: builder.query({
      query: () => 'channels',
      providesTags: result => [
        // Это нужно для точечных изменений. Если переименовать канал №4, не нужно снова запрашивать весь список из 100 каналов. Мы просто инвалидируем тег конкретного ID, обновится только этот канал.
        // добавляется тег для списка каналов
        // нужен для случаев, когда меняется количество каналов (например, при добавлении нового канала). У нового канала еще нет ID в кэше, поэтому мы инвалидируем общую метку LIST, чтобы запросить весь список каналов и увидеть новинку.
        { type: 'channels', id: 'LIST' },
        // добавляется тег с id к конкретному каналу
        ...(result?.map(({ id }) => ({ type: 'channels', id })) || []),
      ],

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
          const handleNewChannel = (payload) => {
            // ручное обновление данных в кэше
            // Просто добавляем новое сообщение в существующий массив в кэше
            // RTK Query сам уведомит компоненты об изменениях
            updateCachedData((channels) => {
              const cleanChannelName = {
                ...payload,
                name: profanityClean(payload.name),
              }
              channels.push(cleanChannelName)
            })
          }

          const handleRenameChannel = (payload) => {
            // ручное обновление данных в кэше
            updateCachedData((channels) => {
              const channel = channels.find(
                channel => channel.id === payload.id,
              )
              if (channel) {
                // Обязательно очищаем имя, пришедшее из сокета
                channel.name = profanityClean(payload.name)
              }
            })
          }

          const handleRemoveChannel = (payload) => {
            // ручное обновление данных в кэше
            updateCachedData((channels) => {
              return channels.filter(
                channels => String(channels.id) !== String(payload.id),
              )
            })
          }
          const unsubscribeNewChannel = subscribeToEvent(
            'newChannel',
            handleNewChannel,
          )
          const unsubscribeRemoveChannel = subscribeToEvent(
            'removeChannel',
            handleRemoveChannel,
          )
          const unsubscribeRenameChannel = subscribeToEvent(
            'renameChannel',
            handleRenameChannel,
          )

          await cacheEntryRemoved
          unsubscribeNewChannel()
          unsubscribeRemoveChannel()
          unsubscribeRenameChannel()
        }
        catch (error) {
          // Если HTTP запрос завершился ошибкой, подписка не создастся
          console.log(error)
        }
        // Когда компонент с чатом размонтируется (или данные станут не нужны),
        // RTK Query автоматически выполнит этот код:
      },
    }),
    // функции мутации
    addChannel: builder.mutation({
      query: channel => ({
        url: 'channels',
        method: 'POST',
        body: { ...channel, name: profanityClean(channel.name) },
      }),
    }),
    removeChannel: builder.mutation({
      query: id => ({
        url: `channels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'channels', id },
        // синхронизируем состояние и делаем запрос актуальных сообщений
      ],
    }),
    renameChannel: builder.mutation({
      query: ({ id, name }) => ({
        url: `channels/${id}`,
        method: 'PATCH',
        body: { name: profanityClean(name) },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'channels', id }],
    }),
  }),
})

export const {
  useGetChannelsQuery,
  useAddChannelMutation,
  useRemoveChannelMutation,
  useRenameChannelMutation,
} = channelsApi
