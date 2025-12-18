import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/app/model/store'
import { NotifyProvider } from './app/model/NotifyContext'
import App from '@/app/ui/App'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <NotifyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NotifyProvider>
  </Provider>
  //</StrictMode>
)
