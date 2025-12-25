import { Button } from 'react-bootstrap'

export const ShowModalButton = ({ onClick, text }) => {
  return (
    <Button
      type="button"
      variant="outline-light"
      size="sm"
      onClick={onClick}
      style={{
        width: '24px',
        height: '24px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
      }}
      className="p-0"
    >
      <span style={{ marginBottom: '2px' }}>{text}</span>
    </Button>
  )
}
