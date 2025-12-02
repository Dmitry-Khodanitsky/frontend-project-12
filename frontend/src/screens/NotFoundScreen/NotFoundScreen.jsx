import NotFoundAnimation from './NotFoundAnimation'

const NotFoundScreen = () => {
  return (
    <div>
      <h1 className="text-white position-absolute top-25">Ой.. Такой страницы нет</h1>
      <NotFoundAnimation />
    </div>
  )
}

export default NotFoundScreen
