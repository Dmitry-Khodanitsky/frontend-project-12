import { Nav } from "react-bootstrap"
const ChannelItem = ({ id, children }) => {
  return (
    <Nav.Item>
      <Nav.Link
        eventKey={id}
        className="rounded-0"
        style={{ '--bs-nav-pills-link-active-bg': '#1a1d20' }}
      >
        {children}
      </Nav.Link>
    </Nav.Item>
  )
}

export default ChannelItem
