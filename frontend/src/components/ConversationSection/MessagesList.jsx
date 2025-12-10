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

  if (!channelId) return <h4>Кажется мы не смогли найти такой канал</h4>
  const token = useSelector(selectToken)

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token, channelId])

  const dispatch = useDispatch()
  const channelMessages = useSelector(selectMessagesByChannelId(channelId))
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)

  if (error) {
    return <h4>Что-то пошло не так</h4>
  }

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
