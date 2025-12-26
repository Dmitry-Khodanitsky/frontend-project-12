import { Formik, Form, Field } from 'formik'
import { useLoginMutation } from '@/features/auth/'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { LoadingSpinner } from '@/common/components'
import { useTranslation } from 'react-i18next'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()

  const { t } = useTranslation()

  useEffect(() => {
    if (isSuccess) {
      navigate('/', { replace: true })
    }
  }, [isSuccess, navigate])

  const handleSubmit = (values) => {
    login(values)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {() => (
        <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h2 className="text-center mb-4">{t('auth.loginTitle')}</h2>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="username"
              id="username"
              name="username"
              placeholder={t('common.placeholders.username')}
              className={`form-control ${isError ? 'is-invalid' : ''}`}
            >
            </Field>
            <label htmlFor="username">
              {t('common.placeholders.username')}
            </label>
          </div>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="current-password"
              id="password"
              name="password"
              type="password"
              placeholder={t('common.placeholders.password')}
              className={`form-control ${isError ? 'is-invalid' : ''}`}
            >
            </Field>
            <label htmlFor="password">
              {t('common.placeholders.password')}
            </label>
            {isError && (
              <div className="invalid-tooltip d-block">{t('errors.auth')}</div>
            )}
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
            {isLoading ? <LoadingSpinner /> : t('common.login')}
          </button>
        </Form>
      )}
    </Formik>
  )
}
