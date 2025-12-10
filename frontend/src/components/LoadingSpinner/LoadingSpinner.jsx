import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
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

export default LoadingSpinner
