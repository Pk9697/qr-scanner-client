function Qr({ qr: { content = '' } }) {
  return (
    <div className="qr">
      <div>{content}</div>
      <div>
        <a href={`https://${content}`} target="_blank" rel="noreferrer">
          Visit
        </a>
        <button type="button">Delete</button>
      </div>
    </div>
  )
}

export default Qr
