import { Tab } from 'react-bootstrap'
import { useEffect } from 'react'
import { selectToken } from '../../store/authSlice'
import {
  fetchMessages,
  selectMessagesByChannelId,
} from '../../store/messagesSlice'
import MessageItem from './MessageItem'
import { useDispatch, useSelector } from 'react-redux'

const MessagesList = ({ channelId }) => {
  if (!channelId) return 
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const channelMessages = useSelector(selectMessagesByChannelId(channelId))

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token, channelId])

  return (
    <div style={{ minHeight: '100%' }}>
      {channelMessages.map((message) => (
        <MessageItem
          key={message.id}
          username={message.username}
          text={message.body}
        />
      ))}
    </div>
  )
}

export default MessagesList
