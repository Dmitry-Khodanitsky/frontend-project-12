import { modalState, closeModal } from '@/app/model/uiSlice'
import { useRenameChannelMutation } from '../../api/channelsApi'
import { useSelector, useDispatch } from 'react-redux'
import { useNotification } from '@/app/model/NotifyContext'
import { ChannelForm } from '../ChannelForm'
import { useChannelByIdSelector } from '@/common/hooks'
import { useTranslation } from 'react-i18next'
import { ModalWrapper, ModalButtons } from '@/common/components'

export const RenameChannelModal = () => {
  // Состояние модального окна
  const { isOpened, type, extra } = useSelector(modalState)
  const dispatch = useDispatch()
  const [renameChannel, { isLoading }] = useRenameChannelMutation()

  //Получение имени канала, который хотим переименовать
  const channel = useChannelByIdSelector(extra?.id)

  const showNotification = useNotification()

  const { t } = useTranslation()

  if (type !== 'renameChannel' || !isOpened) return null
  const currentChannelName = channel?.name || ''

  // Обработчик
  const handleRename = async (values) => {
    try {
      await renameChannel({ id: extra.id, name: values.name }).unwrap()
      dispatch(closeModal())
      showNotification(t('notifications.success.renameChannel'), 'success')
    } catch (err) {
      showNotification(t('errors.renameChannel', { error: err.data }), 'danger')
    }
  }

  return (
    <ModalWrapper visible={isOpened} title={t('modals.renameChannel.title')}>
      <ChannelForm
        handleSubmit={handleRename}
        initialValue={currentChannelName}
      >
        <ModalButtons
          isLoading={isLoading}
          title={t('modals.renameChannel.submit')}
        />
      </ChannelForm>
    </ModalWrapper>
  )
}
