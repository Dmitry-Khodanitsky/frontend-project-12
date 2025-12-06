import SectionTitle from '../SectionTitle/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { selectMessages } from '../../store/messagesSlice'
import { selectToken } from '../../store/authSlice'
import { fetchMessages } from '../../store/messagesSlice'
import { selectActualChannel } from '../../store/channelsSlice'
import { selectChannels } from '../../store/channelsSlice'
import { useEffect } from 'react'
import axios from 'axios'

const ConversationSection = () => {
  const dispatch = useDispatch()
  const allChats = useSelector(selectMessages)
  const token = useSelector(selectToken) //добавить в кастомный хук как возврат 

  // useEffect(() => {
  //   dispatch(fetchMessages(token))
  // }, [])

  const channelId = useSelector(selectActualChannel)
  console.log(channelId)
  const allChannels = useSelector(selectChannels)
  console.log('Все чаты', allChats)
  const currentChat = allChats.find((chat) => chat.channelId === channelId) //добавить в кастомный хук как возврат 
  const currentChannel = allChannels.find((channel) => channel.id === channelId) // //добавить  в кастомный хук как возврат 
  console.log('Текущий чат', currentChat)
  console.log('Текущий канал', currentChannel)

  return (
    <section className="w-100">
      <SectionTitle name='name' isEditable={false} />
      <div className="p-3 overflow-auto d-sm-flex">{currentChat.message}</div>
    </section>
  )
}

export default ConversationSection
