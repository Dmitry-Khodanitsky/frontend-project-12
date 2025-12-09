import { Routes, Route } from 'react-router'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import AuthorizationScreen from './screens/AuthorizationScreen/AuthorizationScreen'
import MainScreen from './screens/MainScreen/MainScreen'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'
import { ActiveChannelIdProvider } from './context/channelProvider'

function App() {
  return (
    <ActiveChannelIdProvider>
      <BaseLayout>
        <Routes>
          <Route path="/login" element={<AuthorizationScreen />} />
          <Route path="/" element={<MainScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BaseLayout>
    </ActiveChannelIdProvider>
  )
}

export default App
