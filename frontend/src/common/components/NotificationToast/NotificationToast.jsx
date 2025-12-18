import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ReactDom from 'react-dom'

export const NotificationToast = ({ toasts, onRemove, from = 'СВЯЗЬ 🤙' }) => {
  return (
    <ToastContainer
      position="bottom-end"
      className="p-3"
      style={{ zIndex: 2000 }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          show
          delay={5000}
          autohide
          onClose={() => onRemove(toast.id)}
          bg={toast.variant}
          className="mb-2"
        >
          <Toast.Header>
            <strong className="me-auto">{from}</strong>
            {/* сделать показ времени ago */}
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}
