import { Formik, Form, Field } from 'formik'
import { Button } from 'react-bootstrap'
import { useAddChannelMutation } from '../api/channelsApi'
import { LoadingSpinner, ModalWrapper } from '@/common/components'

export const AddChannelForm = ({ handleClose, visible }) => {
  const [addChannel, { error, isLoading }] = useAddChannelMutation()

  const handleSubmit = async (values) => {
    //сделать обновление active channel id
    try {
      const { id: channelId } = await addChannel(values).unwrap()
      console.log('Успешный ответ от сервера:', channelId)
      handleClose()
    } catch (err) {
      console.error('Ошибка при добавлении канала:', err)
    }
  }

  return (
    <ModalWrapper
      visible={visible}
      handleClose={handleClose}
      title={'Добавить канал'}
    >
      <Formik
        // сделать валидацию через yup
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {() => (
          <Form>
            <div className="form-floating mb-3">
              <Field
                required
                id="name"
                name="name"
                placeholder="Название канала"
                className={`form-control ${error ? 'is-invalid' : ''}`}
              ></Field>
              {error && (
                <div className="invalid-tooltip">Неверный название</div>
              )}
              <label htmlFor="name">Название канала</label>
            </div>
            <div className='d-flex justify-content-end'>
              <Button className='me-2' type="button" variant="secondary" onClick={handleClose}>
                Отменить
              </Button>
              <Button type="submit" variant="primary">
                {isLoading ? <LoadingSpinner /> : 'Отправить'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}
