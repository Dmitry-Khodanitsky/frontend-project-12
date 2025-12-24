import { modalState, closeModal } from '@/app/model/uiSlice'
import { useRemoveChannelMutation } from '../../api/channelsApi'
import { useSelector, useDispatch } from 'react-redux'
import { useNotification } from '@/app/model/NotifyContext'
import { useTranslation } from 'react-i18next'
import { ModalWrapper, ModalButtons } from '@/common/components'

export const DeleteChannelModal = () => {
  const { isOpened, type, extra } = useSelector(modalState)
  const dispatch = useDispatch()
  const [removeChannel, { isLoading }] = useRemoveChannelMutation()
  const showNotification = useNotification()
  const { t } = useTranslation()

  if (type !== 'removeChannel' || !isOpened) return null

  const handleRemove = async () => {
    try {
      await removeChannel(extra.id).unwrap()
      dispatch(closeModal())

      showNotification(t('notifications.success.removeChannel'), 'success')
    } catch (err) {
      showNotification(t('errors.removeChannel', { error: err.data }), 'danger')
    }
  }

  return (
    <ModalWrapper visible={isOpened} title={t('modals.removeChannel.title')}>
      <ModalButtons
        isLoading={isLoading}
        title={t('modals.removeChannel.submit')}
        type="button"
        onClick={handleRemove}
      />
    </ModalWrapper>
  )
}
