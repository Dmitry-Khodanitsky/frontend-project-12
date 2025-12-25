import { Button } from 'react-bootstrap'
import { LoadingSpinner } from '@/common/components'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/app/model/uiSlice'
import { useTranslation } from 'react-i18next'

export const ModalButtons = ({
  isLoading,
  title,
  type = 'submit',
  onClick,
  variant = 'primary',
}) => {
  const { t } = useTranslation()
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
        {t('common.cancel')}
      </Button>
      <Button
        type={type}
        variant={variant}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : title}
      </Button>
    </div>
  )
}
