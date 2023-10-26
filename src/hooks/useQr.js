import { useEffect, useReducer } from 'react'
import { APIUrls } from '../helpers/utils'
import qrReducer from '../reducers/qr'
import {
  fetchAllQrsError,
  fetchAllQrsStart,
  fetchAllQrsSuccess,
} from '../actions/qr'

const initialState = {
  qrs: [],
  error: null,
  inProgress: false,
}

function useQr(token) {
  const [qrState, dispatch] = useReducer(qrReducer, initialState)

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllQrs(token)
    }
  }, [token])

  const fetchAllQrs = async () => {
    dispatch(fetchAllQrsStart())
    const url = APIUrls.fetchAllQrs()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatch(fetchAllQrsSuccess(data.data.qrs))
    } else {
      dispatch(fetchAllQrsError(data.message))
    }
  }

  return { qrState }
}

export default useQr
