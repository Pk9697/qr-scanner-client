import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../context/qrContext'
import { AuthContext } from '../context/authContext'
import notify from '../helpers/commonFunctions'

function useScan() {
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    qrState: { inProgress },
    createQr,
  } = useContext(QrContext)

  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext)

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
      notify({ type: 'success', msg: 'Scanned Successfully!' })
    }
  }

  const handleError = (err) => {
    notify({ type: 'error', msg: err })
  }

  const handleClick = () => {
    setData(null)
    setOpen((prev) => !prev)
  }

  const handleSave = () => {
    if (isLoggedIn) {
      createQr(encodeURIComponent(data))
    } else {
      notify({ type: 'error', msg: 'Please Login to Save!' })
    }
  }

  return {
    data,
    open,
    isLoading,
    inProgress,
    handleScan,
    handleError,
    handleSave,
    handleClick,
  }
}

export default useScan
