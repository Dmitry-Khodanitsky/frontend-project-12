import { LoginForm } from '@/features/auth/ui/authForms'
import { Navigate } from 'react-router'
import { selectToken } from '@/features/auth/model/authSlice'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '@/features/auth/ui/AuthWrapper'
import { useTranslation } from 'react-i18next'

export const LoginPage = () => {
  const token = useSelector(selectToken)
  const { t } = useTranslation()

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <AuthWrapper
      form={<LoginForm />}
      footerLink={
        <p>
          {t('auth.noAccount')} <a href="/signup">{t('auth.registerTitle')}</a>
        </p>
      }
    />
  )
}
