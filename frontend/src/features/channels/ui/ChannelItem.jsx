import { Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { ChannelDropdown } from './ChannelDropdown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ChannelItem = ({ channel, ref }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation()

  return (
    <Nav.Item
      as="li"
      className="w-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <Nav.Link
        eventKey={channel.id}
        className="d-flex p-1 border-0 rounded-0"
        style={{ '--bs-nav-pills-link-active-bg': '#1a1d20' }}
      >
        <ButtonGroup className="w-100 border-0">
          <Button
            style={{ pointerEvents: 'none' }}
            variant="none"
            className="text-start text-truncate border-0 rounded-0  flex-grow-1"
          >
            {`# ${channel.name}`}
          </Button>

          {channel.removable && isHovered && (
            <Dropdown
              as={ButtonGroup}
              className="flex-grow-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Dropdown.Toggle
                split
                variant="none"
                className="border-0 rounded-0 text-reset"
              >
                <span className="visually-hidden">{t('modals.dropdown')}</span>
              </Dropdown.Toggle>
              <ChannelDropdown id={channel.id} />
            </Dropdown>
          )}
        </ButtonGroup>
      </Nav.Link>
    </Nav.Item>
  )
}

export default ChannelItem
