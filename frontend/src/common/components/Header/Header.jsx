import { Navbar } from 'react-bootstrap'
import {LogOutButton} from './LogOutButton'
import { useSelector } from 'react-redux'
import { selectToken } from '../../../store/authSlice'

export const Header = () => {
  const token = useSelector(selectToken)

  return (
    <Navbar className="border-bottom">
      <div className="d-flex justify-content-between w-100 ps-3 pe-3">
        <Navbar.Brand className="d-none d-sm-flex">СВЯЗЬ 🤙</Navbar.Brand>

        {token && <LogOutButton />}
      </div>
    </Navbar>
  )
}

