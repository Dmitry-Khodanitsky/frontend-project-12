import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logOut } from '@/features/auth/model/authSlice'

export const LogOutButton = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
    console.log('Пользователь вышел')
  }
  return (
    <Button variant="primary" type="button" onClick={handleLogout}>
      Выйти
    </Button>
  )
}


