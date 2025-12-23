import { LoginForm } from '../authForms'
import { Navigate } from 'react-router'
import LoginAnimation from './LoginAnimation'
import { selectToken } from '../../model/authSlice'
import { useSelector } from 'react-redux'

export const Login = () => {
  const token = useSelector(selectToken)

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <div className="card col-12 col-md-8 col-xxl-6 align-self-center">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex  justify-content-center ">
          <LoginAnimation />
        </div>
        <LoginForm />
      </div>
      <div className="card-footer d-flex justify-content-center">
        <p>
          Нет аккаунта? <a href="/signup"> Регистрация</a>
        </p>
      </div>
    </div>
  )
}
