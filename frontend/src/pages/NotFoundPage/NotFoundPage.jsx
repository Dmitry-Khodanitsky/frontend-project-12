import NotFoundAnimation from './NotFoundAnimation'

export const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-white position-absolute top-25">
        Ой.. Такой страницы нет
      </h1>
      <NotFoundAnimation />
    </div>
  )
}
