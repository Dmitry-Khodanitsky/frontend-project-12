import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'

const BaseLayout = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }, [])
  return (
    <Container fluid className="min-vh-100 d-flex flex-column text-light p-0">
      <Header />

        <div className="col-12 d-flex align-items-center justify-content-center">
          {children}
        
      </div>
    </Container>
  )
}
export default BaseLayout
