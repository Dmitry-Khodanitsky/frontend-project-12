import { LoginForm } from '@/features/auth/ui/authForms'
import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '@/features/auth/ui/AuthWrapper'

export const LoginPage = () => {
  const token = useSelector(selectToken)

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <AuthWrapper
      form={<LoginForm />}
      footerLink={
        <p>
          Нет аккаунта? <a href="/signup"> Регистрация</a>
        </p>
      }
    />
  )
}
