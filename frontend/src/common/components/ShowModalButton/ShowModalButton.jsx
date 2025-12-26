import { Button } from 'react-bootstrap'

export const ShowModalButton = ({ onClick, text }) => {
  return (
    <Button
      type="button"
      variant="outline-light"
      size="sm"
      onClick={onClick}
      className="d-block"
    >
      <span className="vertical-align-center">{text}</span>
    </Button>
  )
}
