import { Routes, Route } from 'react-router'
import Login from '../../features/auth/ui/Login/Login'
import { MainPage, NotFoundPage } from '../../pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routing
