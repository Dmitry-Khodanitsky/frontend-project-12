import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import ReactDom from 'react-dom'

export const NotificationToast = ({
  notifications,
  onRemove,
  from = 'СВЯЗЬ 🤙',
}) => {
  return (
    <ToastContainer
      position="bottom-end"
      className="p-3"
      style={{ zIndex: 2000 }}
    >
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          show
          delay={5000}
          autohide
          onClose={() => onRemove(notification.id)}
          bg={notification.variant}
          className="mb-2"
        >
          <Toast.Header>
            <strong className="me-auto">{from}</strong>
            {/* сделать показ времени ago */}
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{notification.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}
