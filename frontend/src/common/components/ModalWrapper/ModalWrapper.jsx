import { Modal } from 'react-bootstrap'

export const ModalWrapper = ({ visible, handleClose, title, children }) => {
  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}
