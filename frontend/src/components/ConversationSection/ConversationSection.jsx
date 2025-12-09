import SectionTitle from '../SectionTitle/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../../store/authSlice'
import { useEffect, useContext } from 'react'
import { Tab } from 'react-bootstrap'
import MessagesList from './MessagesList'
import { fetchMessages } from '../../store/messagesSlice'
import { ActiveChannelIdContext } from '../../context/channelContext'
import { selectChannelById } from '../../store/channelsSlice'

const ConversationSection = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const { activeChannelId } = useContext(ActiveChannelIdContext)
  const selectedChannel = useSelector(selectChannelById(activeChannelId))

  const channelName = selectedChannel?.removable
    ? selectedChannel?.name
    : `# ${selectedChannel?.name}`

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token])

  return (
    <section className="w-100">
      <SectionTitle
        name={selectedChannel ? channelName : 'Выберите канал'}
        isEditable={false}
      />
      <div className="p-3">
        <Tab.Content>
          <MessagesList channelId={activeChannelId} />
        </Tab.Content>
      </div>
    </section>
  )
}

export default ConversationSection
