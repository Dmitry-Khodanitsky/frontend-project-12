import { Routes, Route } from 'react-router'
import { Login, SignUp } from '@/features/auth/ui'
import { MainPage, NotFoundPage } from '@/pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routing
