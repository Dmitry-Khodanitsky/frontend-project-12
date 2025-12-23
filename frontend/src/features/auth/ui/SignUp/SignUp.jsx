import { Navigate } from 'react-router'
import { SignUpForm } from '../authForms'
import { selectToken } from '../../model/authSlice'
import { useSelector } from 'react-redux'

export const SignUp = () => {
  const token = useSelector(selectToken)

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <div className="card col-12 col-md-8 col-xxl-6 align-self-center">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex  justify-content-center "></div>
        <SignUpForm />
      </div>
      <div className="card-footer d-flex justify-content-center">
        <p>
          Уже есть аккаунт? <a href="/login"> Войти</a>
        </p>
      </div>
    </div>
  )
}
