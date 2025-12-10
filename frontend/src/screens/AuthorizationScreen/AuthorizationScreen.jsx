import LoginForm from '../../components/LoginFrom/LoginForm'
import AuthorizationAnimation from './AuthorizationAnimation'

const AuthorizationScreen = () => {
  return (
    <div className="card col-12 col-md-8 col-xxl-6 align-self-center">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex  justify-content-center ">
          <AuthorizationAnimation />
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

export default AuthorizationScreen
