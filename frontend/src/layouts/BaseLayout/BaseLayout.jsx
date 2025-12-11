import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'

const BaseLayout = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }, [])

  return (
    <Container fluid className="vh-100 d-flex flex-column text-light p-0">
      <Header />
      <div className="d-flex justify-content-center flex-grow-1 overflow-hidden">{children}</div>
    </Container>
  )
}

export default BaseLayout
