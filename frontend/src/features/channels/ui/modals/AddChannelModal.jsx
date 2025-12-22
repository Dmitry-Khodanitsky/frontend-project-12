import { useDispatch, useSelector } from 'react-redux'
import { modalState, closeModal } from '@/app/model/uiSlice'
import { useAddChannelMutation } from '@/features/channels/api/channelsApi'
import { ModalButtons, ModalWrapper } from '@/common/components'
import { useChannelId } from '@/common/hooks'
import { useNotification } from '@/app/model/NotifyContext'
import { ChannelForm } from '../ChannelForm'

export const AddChannelModal = () => {
  // использовать состояние uiSlice для управления видимостью модалки
  const [addChannel, { isLoading }] = useAddChannelMutation()
  const { setCurrentChannelId } = useChannelId()

  // Состояние модального окна и обработчики
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModal())
  const { isOpened, type } = useSelector(modalState)

  const showNotification = useNotification()

  if (type !== 'addChannel' || !isOpened) return null

  const handleSubmit = async (channelName) => {
    try {
      const { id: channelId } = await addChannel(channelName).unwrap()
      handleClose()
      setCurrentChannelId(channelId)
      showNotification('Канал добавлен', 'success')
    } catch (err) {
      showNotification(`Ошибка добавления канала: ${err.data}`, 'danger')
    }
  }

  return (
    <ModalWrapper visible={isOpened} title={'Добавить канал'}>
      <ChannelForm handleSubmit={handleSubmit}>
        <ModalButtons isLoading={isLoading} title="Добавить" />
      </ChannelForm>
    </ModalWrapper>
  )
}
