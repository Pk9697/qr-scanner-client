import { useEffect, useState } from 'react'
import QrReader from 'react-qr-reader'

function Home() {
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (open) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [open])

  const handleScan = (result) => {
    if (result) {
      setData(result)
      setOpen(false)
    }
  }

  const handleError = (err) => {
    setError(err)
  }

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="container">
      <div className="text-container">
        <h2>Scan QR Code</h2>
        <p className="text">
          Place qr code inside the frame to scan please avoid shaking to get
          results quickly
        </p>
      </div>

      <div className="qr-box">
        <div className="qr-box__container">
          {open && (
            <QrReader
              delay={1000}
              onScan={handleScan}
              onError={handleError}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
        <div className="qr-box__msg">
          {error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
          {data && (
            <div className="qr-box__link-container">
              <a
                className="qr-box__link"
                href={data}
                target="_blank"
                rel="noreferrer"
              >
                {data}
              </a>
              <button type="button">Save</button>
            </div>
          )}
        </div>
      </div>

      <div>
        <button type="button" onClick={handleClick}>
          {!open ? 'Scan QR' : 'Stop Scanning'}
        </button>
      </div>
    </div>
  )
}

export default Home
