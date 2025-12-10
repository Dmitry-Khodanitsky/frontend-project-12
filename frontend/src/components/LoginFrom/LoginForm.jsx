import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAuthToken,
  selectToken,
  selectError,
  selectLoading,
} from '../../store/authSlice'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectToken)
  const error = useSelector(selectError)
  const isLoading = useSelector(selectLoading)

  const handleSubmit = (values) => {
    dispatch(fetchAuthToken(values))
  }

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true })
    }
  }, [token, navigate])

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
          <h2 className="text-center mb-4">Войти</h2>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="username"
              id="username"
              name="username"
              placeholder="Ваш ник"
              className={`form-control ${error ? 'is-invalid' : ''}`}
            ></Field>
            <label htmlFor="username">Ваш ник</label>
          </div>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="current-password"
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className={`form-control ${error ? 'is-invalid' : ''}`}
            ></Field>
            <label htmlFor="password">Пароль</label>
            {error && (
              <div className="invalid-tooltip">
                Неверный имя пользователя или пароль
              </div>
            )}
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
            {isLoading ? <LoadingSpinner /> : 'Войти'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
