import { Routes, Route } from 'react-router'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import AuthorizationScreen from './screens/AuthorizationScreen/AuthorizationScreen'
import MainScreen from './screens/MainScreen/MainScreen'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/login" element={<AuthorizationScreen />} />
        <Route path="/" element={<MainScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BaseLayout>
  )
}

export default App
