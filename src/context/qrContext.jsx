/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import useQr from '../hooks/useQr'
import { AuthContext } from './authContext'

const QrContext = createContext()

function QrContextProvider({ children }) {
  const {
    authState: { token },
  } = useContext(AuthContext)

  const { qrState } = useQr(token)

  return <QrContext.Provider value={{ qrState }}>{children}</QrContext.Provider>
}

export { QrContextProvider, QrContext }
