import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logOut } from '@/features/auth/model/authSlice'
import { useTranslation } from 'react-i18next'

export const LogOutButton = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }
  return (
    <Button variant="primary" type="button" onClick={handleLogout}>
      {t('common.exit')}
    </Button>
  )
}
