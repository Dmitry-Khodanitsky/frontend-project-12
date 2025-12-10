import SectionTitle from '../SectionTitle/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../../store/authSlice'
import { useEffect } from 'react'
import MessagesList from './MessagesList'
import MessageTextarea from './MessageTextarea'
import { fetchMessages } from '../../store/messagesSlice'
import { selectChannelById } from '../../store/channelsSlice'

const ConversationSection = ({ activeChannelId }) => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const selectedChannel = useSelector(selectChannelById(activeChannelId))

  const channelName = selectedChannel?.removable
    ? selectedChannel?.name
    : `# ${selectedChannel?.name}`

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token])

  return (
    <div className="d-flex flex-column h-100 w-100">
      <SectionTitle
        name={selectedChannel ? channelName : 'Выберите канал'}
        isEditable={false}
      />

      <div className="flex-grow-1 overflow-hidden position-relative">
        <div className="position-absolute top-0 bottom-0 start-0 end-0 overflow-auto p-3">
          <MessagesList channelId={activeChannelId} />
        </div>
      </div>

      <div className="p-3 pt-0">
        <MessageTextarea channel={selectedChannel} />
      </div>
    </div>
  )
}

export default ConversationSection
