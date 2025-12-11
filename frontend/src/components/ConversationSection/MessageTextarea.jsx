import { Form, Button } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, selectToken } from '../../store/authSlice'
import { sendMessage, selectSending } from '../../store/messagesSlice'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const MessageTextarea = ({ channel }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isSending = useSelector(selectSending)
  const token = useSelector(selectToken)

  if (!channel) return null

  return (
    <Formik
      initialValues={{ textarea: '' }}
      onSubmit={(values, { resetForm }) => {
        const newMessage = {
          body: values.textarea,
          channelId: channel.id,
          username: currentUser,
        }
        dispatch(sendMessage({ token, newMessage }))
        resetForm()
      }}
    >
      {({ values, handleSubmit }) => (
        <Form
          className="border border-2 rounded-3 p-3 overflow-auto"
          onSubmit={handleSubmit}
        >
          <Field
            style={{
              outline: 'none',
              boxShadow: 'none',
              border: 'none',
              resize: 'none',
            }}
            name="textarea"
            as="textarea"
            rows="5"
            className="w-100 border border-0 bg-dark "
            placeholder={`Написать в ${channel.name}`}
          />

          <Button
            type="submit"
            variant="outline-primary"
            disabled={!values.textarea.trim()} // неактивна если поле пустое или только пробелы
          >
            {isSending ? <LoadingSpinner /> : 'Отправить'}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default MessageTextarea
