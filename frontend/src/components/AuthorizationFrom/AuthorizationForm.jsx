import { Formik } from 'formik'
import LoginAnimation from './AuthorizationAnimation'

const AuthorizationForm = () => {
  return (
    <div className="card">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <LoginAnimation />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">форма</div>
      </div>
      <div className="card-footer"></div>
    </div>
  )
}

export default AuthorizationForm
