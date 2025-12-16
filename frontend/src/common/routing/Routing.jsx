import { Routes, Route } from 'react-router'
import { Login } from '@/features/auth'
import { MainPage, NotFoundPage } from '@/pages'
import { ActiveChannelIdProvider } from '@/pages/MainPage/model'

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ActiveChannelIdProvider>
            <MainPage />
          </ActiveChannelIdProvider>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routing
