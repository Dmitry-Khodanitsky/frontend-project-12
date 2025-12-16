import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { AddChannelForm } from '@/features/channels'

export const SectionTitle = ({ name, isEditable }) => {
  const [visible, setVisible] = useState(false)
  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  return (
    <div className="d-flex justify-content-between align-items-center bg-dark-subtle p-2">
      <b className="p-2">{name}</b>
      {isEditable && (
        <>
          <Button
            type="button"
            variant="outline-light"
            size="sm"
            onClick={handleOpen}
          >
            <span>＋</span>
          </Button>
          <AddChannelForm visible={visible} handleClose={handleClose} />
        </>
      )}
    </div>
  )
}
