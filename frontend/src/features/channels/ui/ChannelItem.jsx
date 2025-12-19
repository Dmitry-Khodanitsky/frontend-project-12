import { Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { ChannelDropdown } from './ChannelDropdown'

const ChannelItem = ({ channel }) => {
  return (
    <Nav.Item as="li" className="w-100">
      <Nav.Link
        eventKey={channel.id}
        className="d-flex p-1 border-0 rounded-0"
        style={{ '--bs-nav-pills-link-active-bg': '#1a1d20' }}
      >
        <ButtonGroup className="w-100 border-0">
          <Button
            variant="none"
            className="text-start text-truncate border-0 rounded-0  flex-grow-1"
          >
            {`# ${channel.name}`}
          </Button>

          {channel.removable && (
            <Dropdown
              as={ButtonGroup}
              className="flex-grow-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Dropdown.Toggle
                split
                variant="none"
                className="border-0 rounded-0 text-reset"
              />
              <ChannelDropdown id={channel.id} />
            </Dropdown>
          )}
        </ButtonGroup>
      </Nav.Link>
    </Nav.Item>
  )
}

export default ChannelItem
