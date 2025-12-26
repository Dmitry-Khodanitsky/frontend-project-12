import { Nav } from 'react-bootstrap'
import { useEffect } from 'react'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useScrollTo, useChannelId } from '@/common/hooks'
import { Loader, ShowModalButton, ErrorMessage } from '@/common/components'
import ChannelItem from './ChannelItem'
import {
  AddChannelModal,
  RenameChannelModal,
  DeleteChannelModal,
} from './modals/'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/model/uiSlice'
import { useTranslation } from 'react-i18next'

export const ChannelsList = () => {
  const { data: channels, isError, isLoading } = useGetChannelsQuery()
  const { activeChannelId } = useChannelId()
  const activeChannelRef = useScrollTo(activeChannelId)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  // хуки и обработчики для работы с модальным окном добавления каналов через slice
  const handleOpen = () =>
    dispatch(openModal({ type: 'addChannel', extra: null }))

  useEffect(() => {
    if (isError) {
      toast.error(t('error.channels'))
    }
  }, [isError])

  return (
    <aside
      className="border-end d-flex flex-column h-100"
      style={{ width: '20%', minWidth: '120px' }}
    >
      <div className="d-flex align-items-center justify-content-between bg-dark-subtle p-3 shadow">
        <b>{t('chat.channelsTitle')}</b>
        <ShowModalButton onClick={handleOpen} text="+" />
      </div>

      {isLoading
        ? (
            <Loader />
          )
        : isError
          ? (
              <ErrorMessage message={t('error.channels')} />
            )
          : (
              <div className="flex-grow-1 overflow-auto">
                <Nav
                  as="ul"
                  variant="pills"
                  className="flex-column flex-grow-1 overflow-auto"
                >
                  {channels.map((channel) => {
                    const ref
                      = channel.id === activeChannelId ? activeChannelRef : null
                    return (
                      <ChannelItem
                        key={channel.id}
                        channel={channel}
                        ref={ref}
                      >
                      </ChannelItem>
                    )
                  })}
                </Nav>
              </div>
            )}
      {/* Модальное окно для удаления канала */}
      <DeleteChannelModal />
      {/* Модальное окно для переименовывания канала  */}
      <RenameChannelModal />
      <AddChannelModal />
    </aside>
  )
}
