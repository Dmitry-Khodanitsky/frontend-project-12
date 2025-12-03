import LoginForm from './loginForm'
import LoginAnimation from './AuthorizationAnimation'

const AuthorizationForm = () => {
  return (
    <div className="card">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <LoginAnimation />
        </div>
          <LoginForm />
      </div>
      <div className="card-footer d-flex justify-content-center">
        <p>
          Нет аккаунта? <a href="/"> Регистрация</a>
        </p>
      </div>
    </div>
  )
}

export default AuthorizationForm
