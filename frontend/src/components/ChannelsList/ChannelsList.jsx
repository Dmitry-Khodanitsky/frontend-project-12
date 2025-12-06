import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectChannels } from '../../store/channelsSlice'
import { fetchChannels } from '../../store/channelsSlice'
import { selectToken } from '../../store/authSlice'
import SectionTitle from '../SectionTitle/SectionTitle'
import ChanelItem from './ChannelItem'

const ChannelsList = () => {
  const channels = useSelector(selectChannels)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannels(token))
  }, [])

  return (
    <aside
      className="border-end"
      style={{
        width: '250px',
        minWidth: '250px',
      }}
    >
      <SectionTitle name="Каналы" isEditable={true} />
      <ul className="nav flex-column nav-pills nav-fill mb-3 overflow-auto h-100 d-block">
        {channels.map((channel) => {
          return <li key={channel.id}><ChanelItem name={channel.name}/></li>
        })}
      </ul>
    </aside>
  )
}

export default ChannelsList
