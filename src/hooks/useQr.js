import { useEffect, useReducer } from 'react'
import { APIUrls } from '../helpers/utils'
import qrReducer from '../reducers/qr'
import {
  createQrError,
  createQrStart,
  createQrSuccess,
  deleteQrError,
  deleteQrStart,
  deleteQrSuccess,
  fetchAllQrsError,
  fetchAllQrsStart,
  fetchAllQrsSuccess,
} from '../actions/qr'
import notify from '../helpers/commonFunctions'

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
      notify({ type: 'error', msg: data.message })
    }
  }

  const createQr = async (content) => {
    dispatch(createQrStart())
    const url = APIUrls.createQr(content)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatch(createQrSuccess(data.data.qr))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatch(createQrError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  const deleteQr = async (qrId) => {
    dispatch(deleteQrStart())
    const url = APIUrls.deleteQr(qrId)
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatch(deleteQrSuccess(qrId))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatch(deleteQrError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  return { qrState, createQr, deleteQr }
}

export default useQr
