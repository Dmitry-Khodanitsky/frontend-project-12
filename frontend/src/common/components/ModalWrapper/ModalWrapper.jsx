import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/app/model/uiSlice'

export const ModalWrapper = ({ visible, title, children }) => {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModal())
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}
