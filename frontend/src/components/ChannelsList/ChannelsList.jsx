import { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectChannels,
  fetchChannels,
  selectLoading,
} from '../../store/channelsSlice'

import { selectToken } from '../../store/authSlice'
import SectionTitle from '../SectionTitle/SectionTitle'
import ChannelItem from './ChannelItem'
import Loader from '../Loader/Loader'

const ChannelsList = () => {
  const channels = useSelector(selectChannels)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchChannels(token))
  }, [token])

  return (
    <aside className="border-end" style={{ width: '20%', minWidth: '120px' }}>
      <SectionTitle name="Каналы" isEditable={true} />
      {isLoading ? (
        <Loader />
      ) : (
        <Nav variant="pills" className="flex-column">
          {channels.map((channel) => {
            return (
              <ChannelItem key={channel.id} id={channel.id}>
                {channel.removable ? channel.name : `# ${channel.name}`}
              </ChannelItem>
            )
          })}
        </Nav>
      )}
    </aside>
  )
}

export default ChannelsList
