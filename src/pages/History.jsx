import { useContext } from 'react'
import QrList from '../components/QrList'
import { QrContext } from '../context/qrContext'

function History() {
  const {
    qrState: { qrs },
  } = useContext(QrContext)

  return (
    <div className="container">
      <div className="text-container">
        <h2>Scanning History</h2>
        <p className="text">Your Saved Qr&apos;s</p>
      </div>
      <QrList qrs={qrs} />
    </div>
  )
}

export default History
