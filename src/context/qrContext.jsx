/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import useQr from '../hooks/useQr'
import { AuthContext } from './authContext'

const QrContext = createContext()

function QrContextProvider({ children }) {
  const {
    authState: { token },
  } = useContext(AuthContext)

  const { qrState, createQr, deleteQr } = useQr(token)

  return (
    <QrContext.Provider value={{ qrState, createQr, deleteQr }}>
      {children}
    </QrContext.Provider>
  )
}

export { QrContextProvider, QrContext }
