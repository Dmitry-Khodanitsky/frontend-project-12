import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import store from '@/app/model/store'
import App from '@/app/ui/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/i18n'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <ToastContainer position="bottom-right" theme="dark" newestOnTop />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
)
