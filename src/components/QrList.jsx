import Qr from './Qr'

function QrList({ qrs = [], deleteQr }) {
  return (
    <div className="qrList">
      {qrs.map((qr) => (
        // eslint-disable-next-line no-underscore-dangle
        <Qr key={qr._id} qr={qr} deleteQr={deleteQr} />
      ))}
    </div>
  )
}

export default QrList
