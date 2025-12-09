import { Tab } from 'react-bootstrap'
import { useEffect } from 'react'
import { selectToken } from '../../store/authSlice'
import {
  fetchMessages,
  selectMessagesByChannelId,
} from '../../store/messagesSlice'
import { selectChannels } from '../../store/channelsSlice'
import MessageItem from './messageItem'
import { useDispatch, useSelector } from 'react-redux'

const MessagesList = ({ channelId }) => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const channelMessages = useSelector(selectMessagesByChannelId(channelId))

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [token])

  const allChannels = useSelector(selectChannels)

  return allChannels.map((channel) => {
    return (
      <div key={channel.id}>
        {channelMessages.map((message) => {
          if (message.channelId === channel.id) {
            return (
              <Tab.Pane eventKey={channel.id} key={message.id}>
                <MessageItem username={message.username} text={message.body} />
              </Tab.Pane>
            )
          }
          return null
        })}
      </div>
    )
  })
}

export default MessagesList
