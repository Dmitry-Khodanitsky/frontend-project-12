import { Button } from 'react-bootstrap'

export const SectionTitle = ({ name, isEditable }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-dark-subtle p-2">
      <b className="p-2">{name}</b>
      {isEditable && (
        <Button type="button" variant="outline-light" size="sm">
          <span>＋</span>
        </Button>
      )}
    </div>
  )
}
