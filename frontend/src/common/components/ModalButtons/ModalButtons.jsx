import { Button } from 'react-bootstrap'
import { LoadingSpinner } from '@/common/components'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/app/model/uiSlice'

export const ModalButtons = ({
  isLoading,
  title,
  type = 'submit',
  onClick,
}) => {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModal())
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
