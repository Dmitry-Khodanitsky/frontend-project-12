import { Container, Navbar } from 'react-bootstrap'
import LogOutButton from './LogOutButton'
import { useSelector } from 'react-redux'
import { selectToken } from '../../store/authSlice'

const Header = () => {
  const token = useSelector(selectToken)

  return (
    <Navbar className="border-bottom">
      <Container>
        <Navbar.Brand className="d-none d-sm-flex">СВЯЗЬ 🤙</Navbar.Brand>
        <button className="d-flex d-sm-none">⏮️</button>

        {token && <LogOutButton />}
      </Container>
    </Navbar>
  )
}

export default Header
