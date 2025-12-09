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
      {/* Убрать центрирование, добавить растяжение на всю высоту */}
      <div className="flex-grow-1 d-flex ">
        <div className="col-12 d-flex justify-content-center">{children}</div>
      </div>
    </Container>
  )
}

export default BaseLayout
