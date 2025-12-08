import SectionTitle from '../SectionTitle/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../../store/authSlice'
import { useEffect } from 'react'
import { Tab } from 'react-bootstrap'
import MessagesList from './MessagesList'
import { fetchMessages } from '../../store/messagesSlice'

const ConversationSection = () => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [])

  return (
    <section className="w-100">
      <SectionTitle name="name" isEditable={false} />
      <div className='p-3'>
        <Tab.Content>
          <MessagesList />
        </Tab.Content>
      </div>
    </section>
  )
}

export default ConversationSection
