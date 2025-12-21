import { Formik, Form, Field } from 'formik'
import { ModalButtons, ModalWrapper } from '@/common/components'
import { useAddChannelMutation, useGetChannelsQuery } from '../api/channelsApi'

import { ActiveChannelIdContext } from '@/pages/MainPage/model'
import { useContext, useMemo } from 'react'
import { getChannelsValidationSchema } from '../model/channelSchema'
import { useNotification } from '@/app/model/NotifyContext'

export const AddChannelForm = ({ handleClose, visible }) => {
  const { setActiveChannelId } = useContext(ActiveChannelIdContext)
  const { data: channels } = useGetChannelsQuery()
  const [addChannel, { isLoading }] = useAddChannelMutation()

  const showNotification = useNotification()

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
      showNotification('Канал добавлен', 'success')
    } catch (err) {
      showNotification(`Ошибка добавления канала: ${err.data}`, 'danger')
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
                className={`form-control ${
                  errors.name ? 'is-invalid' : ''
                } mb-3`}
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
              <ModalButtons
                handleClose={handleClose}
                isLoading={isLoading}
                title="Добавить"
              />
            </div>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  )
}
