import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectToken } from '../../store/authSlice'

const MainScreen = () => {
  const token = useSelector(selectToken)

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <h2>Main Screen</h2>
}

export default MainScreen
