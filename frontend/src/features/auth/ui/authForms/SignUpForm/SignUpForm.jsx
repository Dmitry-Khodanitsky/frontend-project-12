import { Formik, Form, Field } from 'formik'
import { useSignUpMutation } from '@/features/auth/'
import { getSignUpSchema } from '@/features/auth/model/signUpSchema'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { LoadingSpinner } from '@/common/components'
import { useTranslation } from 'react-i18next'

export const SignUpForm = () => {
  const navigate = useNavigate()
  const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation()

  const { t } = useTranslation()

  useEffect(() => {
    if (isSuccess) {
      navigate('/', { replace: true })
    }
  }, [isSuccess, navigate])

  const handleSubmit = (values) => {
    signUp(values)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        passwordConfirmation: '',
      }}
      enableReinitialize={true}
      validateOnBlur={true}
      validateOnChange={true}
      validationSchema={getSignUpSchema(t)}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h2 className="text-center mb-4">{t('auth.registerTitle')}</h2>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="username"
              id="username"
              name="username"
              placeholder={t('common.placeholders.username')}
              className={`form-control ${
                errors.username && touched.username ? 'is-invalid' : ''
              }`}
            ></Field>
            {/* если есть ошибка валидации показываем табличку с сообщением об ошибке */}
            {errors.username && (
              <div className="invalid-tooltip">{errors.username}</div>
            )}
            <label htmlFor="username">
              {t('common.placeholders.username')}
            </label>
          </div>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="password"
              id="password"
              name="password"
              type="password"
              placeholder={t('common.placeholders.password')}
              className={`form-control ${
                errors.password && touched.password ? 'is-invalid' : ''
              }`}
            ></Field>

            {/* если есть ошибка валидации показываем табличку с сообщением об ошибке */}
            {errors.password && (
              <div className="invalid-tooltip">{errors.password}</div>
            )}
            <label htmlFor="password">
              {t('common.placeholders.password')}
            </label>
          </div>

          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="passwordConfirmation"
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder={t('auth.confirmPassword')}
              className={`form-control ${
                errors.passwordConfirmation && touched.passwordConfirmation
                  ? 'is-invalid'
                  : ''
              }`}
            ></Field>
            {/* если есть ошибка валидации показываем табличку с сообщением об ошибке */}
            {errors.passwordConfirmation && (
              <div className="invalid-tooltip">
                {errors.passwordConfirmation}
              </div>
            )}
            <label htmlFor="passwordConfirmation">
              {t('auth.confirmPassword')}
            </label>

            {/* обработка ошибки сервера */}
            {isError && (
              <div className="invalid-tooltip">
                {t('erros.userExists')}
              </div>
            )}
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
            {isLoading ? <LoadingSpinner /> : t('common.registration')}
          </button>
        </Form>
      )}
    </Formik>
  )
}
