import Qr from './Qr'

function QrList({ qrs = [] }) {
  return (
    <div className="qrList">
      {qrs.map((qr) => (
        // eslint-disable-next-line no-underscore-dangle
        <Qr key={qr._id} qr={qr} />
      ))}
    </div>
  )
}

export default QrList
