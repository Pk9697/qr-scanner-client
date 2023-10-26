import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext'
import { QrContextProvider } from './context/qrContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QrContextProvider>
        <App />
      </QrContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
