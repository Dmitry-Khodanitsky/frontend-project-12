import { Formik, Form, Field } from 'formik'
import { Button } from 'react-bootstrap'
import { useAddChannelMutation, useGetChannelsQuery } from '../api/channelsApi'
import { LoadingSpinner, ModalWrapper } from '@/common/components'
import { ActiveChannelIdContext } from '@/pages/MainPage/model'
import { useContext, useMemo } from 'react'
import { getChannelsValidationSchema } from '../model/channelSchema'

export const AddChannelForm = ({ handleClose, visible }) => {
  const { setActiveChannelId } = useContext(ActiveChannelIdContext)
  const { data: channels } = useGetChannelsQuery()
  const [addChannel, { error: fetchError, isLoading }] = useAddChannelMutation()

  // оборачиваем функцию в useMemo чтобы результат ее вычисления пересчитывался только при изменении channels
  const channelSchema = useMemo(
    () => getChannelsValidationSchema(channels || []),
    [channels]
  )

  const handleSubmit = async (values) => {
    try {
      const { id: channelId } = await addChannel(values).unwrap()
      handleClose()
      setActiveChannelId(channelId)
    } catch (err) {
      console.error('Оибка при добавлении канала:', err)
    }
  }

  return (
    <ModalWrapper
      visible={visible}
      handleClose={handleClose}
      title={'Добавить канал'}
    >
      <Formik
        initialValues={{
          name: '',
        }}
        // проверка ошибок должна быть только после нажатия на кнопку submit
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={channelSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ errors, handleChange, setFieldError }) => (
          <Form>
            <div className="form-floating mb-3">
              <Field
                id="name"
                name="name"
                placeholder="Название канала"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                //Тут используется ручное управление формой и вызов обработчика событий
                onChange={(e) => {
                  //обработчик ввода
                  handleChange(e)
                  // Сброс ошибки при вводе нового значения
                  if (errors.name) {
                    setFieldError('name', undefined)
                  }
                }}
              />

              <label htmlFor="name">Название канала</label>
              {errors.name && (
                <div className="invalid-feedback d-block">{errors.name}</div>
              )}
              <div className="d-flex justify-content-end">
                <Button
                  className="me-2"
                  type="button"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Отменить
                </Button>
                <Button type="submit" variant="primary">
                  {isLoading ? <LoadingSpinner /> : 'Добавить'}
                </Button>
                {/* fetchError && tootlip ошибка*/}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}
