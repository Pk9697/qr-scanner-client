import { useContext, useEffect, useState } from 'react'
import { QrContext } from '../context/qrContext'
import { AuthContext } from '../context/authContext'

function useScan() {
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)
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
    }
  }

  const handleError = (err) => {
    setError(err)
  }

  const handleClick = () => {
    setData(null)
    setOpen((prev) => !prev)
  }

  const handleSave = () => {
    if (isLoggedIn) {
      createQr(encodeURIComponent(data))
    } else {
      alert('Please login to save')
    }
  }

  return {
    data,
    open,
    error,
    isLoading,
    inProgress,
    handleScan,
    handleError,
    handleSave,
    handleClick,
  }
}

export default useScan
