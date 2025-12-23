import { Formik, Form, Field } from 'formik'
import { useSignUpMutation } from '@/features/auth/'
import { signUpSchema } from '@/features/auth/model/signUpSchema'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { LoadingSpinner } from '@/common/components'

export const SignUpForm = () => {
  const navigate = useNavigate()
  const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation()

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
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {({ errors, touched, handleChange, setFieldError }) => (
        <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h2 className="text-center mb-4">Регистрация</h2>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="username"
              id="username"
              name="username"
              placeholder="Имя пользователя"
              className={`form-control ${
                errors.username && touched.username ? 'is-invalid' : ''
              }`}
            ></Field>
            {/* если есть ошибка валидации показываем табличку с сообщением об ошибке */}
            {errors.username && (
              <div className="invalid-tooltip">{errors.username}</div>
            )}
            <label htmlFor="username">Имя пользователя</label>
          </div>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="password"
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className={`form-control ${
                errors.password && touched.password ? 'is-invalid' : ''
              }`}
            ></Field>

            {/* если есть ошибка валидации показываем табличку с сообщением об ошибке */}
            {errors.password && (
              <div className="invalid-tooltip">{errors.password}</div>
            )}
            <label htmlFor="password">Пароль</label>
          </div>

          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="passwordConfirmation"
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="Подтвердите пароль"
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
            <label htmlFor="passwordConfirmation">Подтверждение пароля</label>

            {/* обработка ошибки сервера */}
            {isError && (
              <div className="invalid-tooltip">
                Такой пользователь уже существует
              </div>
            )}
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
            {isLoading ? <LoadingSpinner /> : 'Регистрация'}
          </button>
        </Form>
      )}
    </Formik>
  )
}
