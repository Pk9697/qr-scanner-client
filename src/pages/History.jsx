import QrList from '../components/QrList'

function History() {
  return (
    <div className="container">
      <div className="text-container">
        <h2>Scanning History</h2>
        <p className="text">Your Saved Qr&apos;s</p>
      </div>
      <QrList />
    </div>
  )
}

export default History
