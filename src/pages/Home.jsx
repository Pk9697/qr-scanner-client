function Home() {
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
        <div className="qr-box"></div>
        <p>Scanning Code...</p>
      </div>

      <div>
        <button type="button">Place Camera Code</button>
      </div>
    </div>
  )
}

export default Home
