import { Form, Button } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { useSelector } from 'react-redux'
import { selectUser } from '@/features/auth/model/authSlice'
import { LoadingSpinner } from '@/common/components'
import { useSendMessageMutation } from '../api/messagesApi'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const MessageTextarea = ({ channel }) => {
  const [sendMessage, { isLoading: isSending }] = useSendMessageMutation()

  const currentUser = useSelector(selectUser)

  const { t } = useTranslation()

  if (!channel) return null

  return (
    <Formik
      initialValues={{ textarea: '' }}
      onSubmit={async (values, { resetForm }) => {
        const newMessage = {
          body: values.textarea,
          channelId: channel.id,
          username: currentUser,
        }
        try {
          await sendMessage(newMessage).unwrap()
          resetForm()
        } catch (err) {
          toast.error(t('errors.sendingError', { error: err.data }))
        }
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
            aria-label="Новое сообщение"
            //as='textarea'
            as="input"
            rows="5"
            className="w-100 border border-0 bg-dark-subtle "
            placeholder={t('chat.messagePlaceholder', {
              channelName: channel.name,
            })}
          />

          <Button
            type="submit"
            variant="outline-primary"
            disabled={!values.textarea.trim()} // неактивна если поле пустое или только пробелы
          >
            {isSending ? <LoadingSpinner /> : t('common.send')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default MessageTextarea
