import { Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { ChannelDropdown } from './ChannelDropdown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useChannelId } from '@/common/hooks'

const ChannelItem = ({ channel, ref }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation()
  const { setCurrentChannelId, activeChannelId } = useChannelId()
  const isActive = channel.id === activeChannelId

  return (
    <Nav.Item as="li" className="w-100" ref={ref}>
      <ButtonGroup
        className="w-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          variant={isActive ? 'secondary' : 'none'}
          className="text-start text-truncate rounded-0 border-0 flex-grow-1"
          onClick={() => setCurrentChannelId(channel.id)}
        >
          <span className="me-1">#</span>
          {channel.name}
        </Button>

        {channel.removable && isHovered && (
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              split
              variant={isActive ? 'secondary' : 'none'}
              className="border-0 rounded-0"
            >
              <span className="visually-hidden">{t('modals.dropdown')}</span>
            </Dropdown.Toggle>
            <ChannelDropdown id={channel.id} />
          </Dropdown>
        )}
      </ButtonGroup>
    </Nav.Item>
  )
}

export default ChannelItem
