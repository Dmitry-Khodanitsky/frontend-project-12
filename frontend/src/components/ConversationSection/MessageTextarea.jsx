import { Form, Button } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, selectToken } from '../../store/authSlice'
import { sendMessage } from '../../store/messagesSlice'

const MessageTextarea = ({ channel }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log('Текущий пользователь', currentUser)
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
        <Form className="border border-2 rounded-3 p-3" onSubmit={handleSubmit}>
          <Field
            style={{
              outline: 'none',
              boxShadow: 'none',
              border: 'none',
              resize: 'none',
            }}
            name="textarea"
            as="textarea"
            className="w-100 border border-0 bg-dark "
            rows="4"
            placeholder={`Написать в ${channel.name}`}
            // Изменение размера textarea в зависимости от количества строк текста
            onInput={(e) => {
              e.target.style.height = 'auto'
              e.target.style.height = e.target.scrollHeight + 'px'
            }}
          />
          <Button
            type="submit"
            variant="outline-primary"
            disabled={!values.textarea.trim()} // неактивна если поле пустое или только пробелы
          >
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default MessageTextarea
