import { modalState, closeModal } from '@/app/model/uiSlice'
import { useRemoveChannelMutation } from '../../api/channelsApi'
import { useSelector, useDispatch } from 'react-redux'
import { useNotification } from '@/app/model/NotifyContext'

import { ModalWrapper, ModalButtons } from '@/common/components'

export const DeleteChannelModal = () => {
  const { isOpened, type, extra } = useSelector(modalState)
  const dispatch = useDispatch()
  const [removeChannel, { isLoading }] = useRemoveChannelMutation()
  const showNotification = useNotification()

  if (type !== 'removeChannel' || !isOpened) return null

  const handleRemove = async () => {
    try {
      await removeChannel(extra.id).unwrap()
      dispatch(closeModal())

      showNotification('Канал успешно удален', 'success')
    } catch (err) {
      showNotification(`Ошибка удаления канала: ${err.data}`, 'danger')
    }
  }

  return (
    <ModalWrapper visible={isOpened} title="Удалить канал?">
      <ModalButtons
        isLoading={isLoading}
        title="Удалить"
        type="button"
        onClick={handleRemove}
      />
    </ModalWrapper>
  )
}
