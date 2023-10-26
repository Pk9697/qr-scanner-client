function Qr({ qr: { content = '', _id: id }, deleteQr }) {
  return (
    <div className="qr">
      <a href={content} target="_blank" rel="noreferrer">
        {content}
      </a>
      <button type="button" onClick={() => deleteQr(id)}>
        Delete
      </button>
    </div>
  )
}

export default Qr
