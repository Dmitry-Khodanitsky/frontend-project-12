import { Navbar } from 'react-bootstrap'
import { LogOutButton } from '../LogOutButton'
import { useSelector } from 'react-redux'
import { selectToken } from '@/features/auth/model/authSlice'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  const token = useSelector(selectToken)

  return (
    <Navbar className="border-bottom">
      <div className="d-flex justify-content-between w-100 ps-3 pe-3">
        <Navbar.Brand href="/" className="d-none d-sm-flex">
          {t('common.appName')}
        </Navbar.Brand>

        {token && <LogOutButton />}
      </div>
    </Navbar>
  )
}
