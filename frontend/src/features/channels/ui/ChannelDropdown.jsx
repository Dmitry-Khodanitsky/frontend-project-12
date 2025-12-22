import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/model/uiSlice'
import { memo } from 'react'
import { RenameChannelModal, DeleteChannelModal } from './modals/'

export const ChannelDropdown = memo(({ id }) => {
  // Состояние модальных окон и обработчики
  const dispatch = useDispatch()
  const handleOpenRemoveModal = () =>
    dispatch(openModal({ type: 'removeChannel', channelId: id }))
  const handleOpenRenameModal = () =>
    dispatch(openModal({ type: 'renameChannel', channelId: id }))

  return (
    <>
      <Dropdown.Menu drop="end" className="w-25" variant="dark">
        <Dropdown.Item as="button" onClick={handleOpenRenameModal}>
          Переименовать
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={handleOpenRemoveModal}>
          Удалить
        </Dropdown.Item>
      </Dropdown.Menu>

      {/* Модальное окно для удаления канала */}
      <DeleteChannelModal />
      {/* Модальное окно для переименовывания канала  */}
      <RenameChannelModal />
    </>
  )
})
