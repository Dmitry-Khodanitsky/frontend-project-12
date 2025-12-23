import { Navigate } from 'react-router'
import { SignUpForm } from '@/features/auth/ui/authForms'
import { selectToken } from '@/features/auth/model/authSlice'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '@/features/auth/ui/AuthWrapper'

export const SignUpPage = () => {
  const token = useSelector(selectToken)

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <AuthWrapper
      form={<SignUpForm />}
      footerLink={
        <p>
          Уже есть аккаунт? <a href="/login"> Войти</a>
        </p>
      }
    />
  )
}
