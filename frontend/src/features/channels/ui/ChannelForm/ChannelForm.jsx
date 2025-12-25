import { Formik, Form, Field } from 'formik'
import { useMemo } from 'react'
import { getChannelsValidationSchema } from '@/features/channels/model/channelSchema'
import { useGetChannelsQuery } from '@/features/channels/api/channelsApi'
import { useTranslation } from 'react-i18next'

export const ChannelForm = ({ handleSubmit, children, initialValue = '' }) => {
  const { data: channels } = useGetChannelsQuery()
  const { t } = useTranslation()
  // оборачиваем функцию в useMemo чтобы результат ее вычисления пересчитывался только при изменении channels
  //передаем channels для поиска дубликатов названий каналов
  const channelSchema = useMemo(
    () => getChannelsValidationSchema(channels || [], t),
    [channels, t]
  )
  return (
    <Formik
      initialValues={{
        name: initialValue,
      }}
      enableReinitialize={true}
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
              placeholder={t('common.placeholders.channelName')}
              className={`form-control ${errors.name ? 'is-invalid' : ''} mb-3`}
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

            <label htmlFor="name">{t('common.placeholders.channelName')}</label>
            {errors.name && (
              <div className="invalid-feedback d-block">{errors.name}</div>
            )}
            {children}
          </div>
        </Form>
      )}
    </Formik>
  )
}
