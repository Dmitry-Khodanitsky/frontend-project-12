import { Button } from 'react-bootstrap'
import { LoadingSpinner } from '@/common/components'

export const ModalButtons = ({
  handleClose,
  isLoading,
  title,
  type = 'submit',
  onClick,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        className="me-2"
        type="button"
        variant="secondary"
        onClick={handleClose}
      >
        Отменить
      </Button>
      <Button
        type={type}
        variant="primary"
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : title}
      </Button>
    </div>
  )
}
