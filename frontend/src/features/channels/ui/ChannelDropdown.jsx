import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/model/uiSlice'
import { memo } from 'react'
import { RenameChannelModal, DeleteChannelModal } from './modals/'
import { useTranslation } from 'react-i18next'

export const ChannelDropdown = memo(({ id }) => {
  // Состояние модальных окон и обработчики
  const dispatch = useDispatch()
  const handleOpenRemoveModal = () =>
    dispatch(openModal({ type: 'removeChannel', channelId: id }))
  const handleOpenRenameModal = () =>
    dispatch(openModal({ type: 'renameChannel', channelId: id }))

  const { t } = useTranslation()
  return (
    <>
      <Dropdown.Menu drop="end" className="w-25" variant="dark">
        <Dropdown.Item as="button" onClick={handleOpenRenameModal}>
          {t('modals.renameChannel.rename')}
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={handleOpenRemoveModal}>
          {t('modals.removeChannel.submit')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </>
  )
})

ChannelDropdown.displayName = 'ChannelDropdown'
