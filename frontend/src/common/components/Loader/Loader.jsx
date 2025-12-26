import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

export const Loader = () => {
  return (
    <div className="p-3">
      <b className="me-2">Загрузка</b>
      <LoadingSpinner />
    </div>
  )
}
