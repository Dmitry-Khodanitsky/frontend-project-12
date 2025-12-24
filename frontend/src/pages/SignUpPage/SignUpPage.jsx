import { Navigate } from 'react-router'
import { SignUpForm } from '@/features/auth/ui/authForms'
import { selectToken } from '@/features/auth/model/authSlice'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '@/features/auth/ui/AuthWrapper'
import { useTranslation } from 'react-i18next'

export const SignUpPage = () => {
  const token = useSelector(selectToken)
  const { t } = useTranslation()

  if (token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />
  }

  return (
    <AuthWrapper
      form={<SignUpForm />}
      footerLink={
        <p>
          {t('auth.hasAccount')} <a href="/login">{t('auth.loginTitle')}</a>
        </p>
      }
    />
  )
}
