import { Formik, Form, Field } from 'formik'

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {}
        if (values.username === '1' || values.password === '1') {
          errors.username = 'Неверный имя пользователя или пароль'
          errors.password = 'Неверный имя пользователя или пароль'
        }

        return errors
      }}
      onSubmit={(values) => {
        console.log('Данные отправлены', values)
      }}
    >
      {({ errors, touched }) => (
        <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h2 className="text-center mb-4">Войти</h2>
          <div className="form-floating mb-3">
            <Field
              required
              autoComplete="nickame"
              id="username"
              name="username"
              placeholder="Ваш ник"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
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
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            ></Field>
            <label htmlFor="password">Пароль</label>
            {errors.password && (
              <div className="invalid-tooltip">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
            Войти
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
