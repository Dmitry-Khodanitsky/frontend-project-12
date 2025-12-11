import { useEffect, useRef } from 'react'
import { selectToken } from '../../store/authSlice'
import {
  fetchMessages,
  selectError,
  selectLoading,
  selectMessagesByChannelId,
} from '../../store/messagesSlice'
import MessageItem from './MessageItem'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

const MessagesList = ({ channelId }) => {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const channelMessages = useSelector(selectMessagesByChannelId(channelId))
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const lastMessageRef = useRef(null)

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token, channelId])

  useEffect(() => {
    // Cкролл к последнему сообщению
    lastMessageRef.current?.scrollIntoView({
      block: 'nearest',
    })
  }, [channelMessages])

  if (!channelId) return <h4>Кажется мы не смогли найти такой канал</h4>

  if (error) {
    return <h4>Что-то пошло не так</h4>
  }

  return (
    <div style={{ minHeight: '100%' }}>
      {isLoading ? (
        <Loader />
      ) : (
        channelMessages.map((message) => (
          <MessageItem
            key={message.id}
            username={message.username}
            text={message.body}
          />
        ))
      )}
      {/* якорь для автоматического скрола вниз к последнему сообщению */}
      <div ref={lastMessageRef} className='scrollAnchor'/>
    </div>
  )
}

export default MessagesList
