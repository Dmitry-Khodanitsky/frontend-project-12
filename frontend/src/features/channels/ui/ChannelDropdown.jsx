import { Dropdown } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { useRemoveChannelMutation } from '../api/channelsApi'
import { useNotification } from '@/app/model/NotifyContext'
import { ModalWrapper, ModalButtons } from '@/common/components'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'

export const ChannelDropdown = ({ id }) => {
  const [visible, setVisible] = useState(false)
  const [removeChannel, { isLoading }] = useRemoveChannelMutation()
  const showNotification = useNotification()
  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  const handleRemove = async () => {
    try {
      await removeChannel(id).unwrap()
      showNotification('Канал успешно удален', 'success')
    } catch (err) {
      showNotification(`Ошибка удаления канала: ${err.data}`, 'danger')
    }
  }
  return (
    <>
      <Dropdown.Menu
        drop="end"
        className="w-25"
        variant="dark"
        disabled={isLoading}
      >
        <Dropdown.Item as="button">Переименовать</Dropdown.Item>
        <Dropdown.Item as="button" onClick={handleOpen}>
          Удалить
        </Dropdown.Item>
      </Dropdown.Menu>

      {/* Модальное окно для удаления канала */}
      <ModalWrapper
        visible={visible}
        handleClose={handleClose}
        title="Удалить канал?"
      >
        <ModalButtons
          handleClose={handleClose}
          isLoading={isLoading}
          title="Удалить"
          type="button"
          onClick={handleRemove}
        />
      </ModalWrapper>
    </>
  )
}
