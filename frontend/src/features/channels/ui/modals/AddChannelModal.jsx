import { useDispatch, useSelector } from 'react-redux'
import { modalState, closeModal } from '@/app/model/uiSlice'
import { useAddChannelMutation } from '@/features/channels/api/channelsApi'
import { ModalButtons, ModalWrapper } from '@/common/components'
import { useChannelId } from '@/common/hooks'
import { toast } from 'react-toastify'
import { ChannelForm } from '../ChannelForm'
import { useTranslation } from 'react-i18next'
export const AddChannelModal = () => {
  // использовать состояние uiSlice для управления видимостью модалки
  const [addChannel, { isLoading }] = useAddChannelMutation()
  const { setCurrentChannelId } = useChannelId()

  // Состояние модального окна и обработчики
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModal())
  const { isOpened, type } = useSelector(modalState)

  const { t } = useTranslation()

  if (type !== 'addChannel' || !isOpened) return null

  const handleSubmit = async (channelName) => {
    try {
      const { id: channelId } = await addChannel(channelName).unwrap()
      handleClose()
      setCurrentChannelId(channelId)
      toast.success(t('notifications.success.addChannel'))
    }
    catch (err) {
      toast.error(t('errors.addChannel', { error: err.data }))
    }
  }

  return (
    <ModalWrapper visible={isOpened} title={t('modals.addChannel.title')}>
      <ChannelForm handleSubmit={handleSubmit}>
        <ModalButtons
          isLoading={isLoading}
          title={t('modals.addChannel.submit')}
        />
      </ChannelForm>
    </ModalWrapper>
  )
}
