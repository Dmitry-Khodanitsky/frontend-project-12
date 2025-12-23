import { Routes, Route } from 'react-router'
import { LoginPage, MainPage, NotFoundPage, SignUpPage } from '@/pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routing
