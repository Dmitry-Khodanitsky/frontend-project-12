const MessageItem = ({ username, text }) => {
  return (
    <div className="d-flex mb-3">
      <div
        className="d-flex flex-shrink-0 rounded-5 border border-2 border-white me-2 align-items-center justify-content-center"
        style={{ width: 40, height: 40 }}
      >
        <b className="fs-4">{username[0]}</b>
      </div>
      <div className="d-flex flex-column flex-wrap">
        <b>{username}</b>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default MessageItem
