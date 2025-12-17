import { Button } from "react-bootstrap"

export const ModalButton = ({onClick, text}) => {
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
