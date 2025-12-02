import { Routes, Route } from 'react-router'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import MainScreen from './screens/MainScreen/MainScreen'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<MainScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BaseLayout>
  )
}

export default App
