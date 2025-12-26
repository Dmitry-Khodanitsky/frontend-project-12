import { modalState, closeModal } from '@/app/model/uiSlice'
import { useRemoveChannelMutation } from '../../api/channelsApi'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { ModalWrapper, ModalButtons } from '@/common/components'

export const DeleteChannelModal = () => {
  const { isOpened, type, extra } = useSelector(modalState)
  const dispatch = useDispatch()
  const [removeChannel, { isLoading }] = useRemoveChannelMutation()
  const { t } = useTranslation()

  if (type !== 'removeChannel' || !isOpened) return null

  const handleRemove = async () => {
    try {
      await removeChannel(extra.id).unwrap()
      dispatch(closeModal())

      toast.success(t('notifications.success.removeChannel'))
    }
    catch (err) {
      toast.error(t('errors.removeChannel', { error: err.data }))
    }
  }

  return (
    <ModalWrapper visible={isOpened} title={t('modals.removeChannel.title')}>
      <ModalButtons
        isLoading={isLoading}
        title={t('modals.removeChannel.submit')}
        type="button"
        onClick={handleRemove}
        variant="danger"
      />
    </ModalWrapper>
  )
}
