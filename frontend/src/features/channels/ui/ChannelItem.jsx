import { Nav } from 'react-bootstrap'
const ChannelItem = ({ id, ref, children }) => {
  return (
    <Nav.Item>
      <Nav.Link
        ref={ref}
        eventKey={id}
        className="rounded-0 text-dark-emphasis"
        style={{ '--bs-nav-pills-link-active-bg': '#1a1d20' }}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  )
}

export default ChannelItem
