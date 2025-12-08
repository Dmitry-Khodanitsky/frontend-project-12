import { Button } from 'react-bootstrap'

const ChanelItem = ({ name }) => {
  return (
    <Button type="button" variant="dark" className="w-100 rounded-0 text-start">
      <span className="me-1">#</span>
      {name}
    </Button>
  )
}

export default ChanelItem
