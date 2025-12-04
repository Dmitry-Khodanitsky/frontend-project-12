import { Container } from 'react-bootstrap'

const BaseLayout = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  }, [])

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-3"
    >
      <div className="col-12 col-md-8 col-xxl-6">
        {children}
      </div>
    </Container>
  )
}
export default BaseLayout
