import { useState } from 'react'
import QrReader from 'react-qr-reader'

function Home() {
  const [data, setData] = useState('No result')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)

  const handleScan = (result) => {
    if (result) {
      setData(result)
      setOpen(false)
    }
  }

  const handleError = (err) => {
    setError(err)
  }

  return (
    <div className="container">
      {/* <button type="button">Switch</button> */}

      <div className="text-container">
        <h2>Scan QR Code</h2>
        <p className="text">
          Place qr code inside the frame to scan please avoid shaking to get
          results quickly
        </p>
      </div>

      <div className="qr-container">
        <div className="qr-box">
          {open && (
            <QrReader
              delay={1000}
              onScan={handleScan}
              onError={handleError}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
        <p>{open ? 'Loading...' : data}</p>
        {error && <p>{error}</p>}
      </div>

      <div>
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          {!open ? 'Scan QR' : 'Stop Scanning'}
        </button>
      </div>
    </div>
  )
}

export default Home
