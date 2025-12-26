import { Spinner } from 'react-bootstrap'

export const LoadingSpinner = () => {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  )
}
