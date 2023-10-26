import {
  CREATE_QR_ERROR,
  CREATE_QR_START,
  CREATE_QR_SUCCESS,
  DELETE_QR_ERROR,
  DELETE_QR_START,
  DELETE_QR_SUCCESS,
  FETCH_ALL_QRS_ERROR,
  FETCH_ALL_QRS_START,
  FETCH_ALL_QRS_SUCCESS,
} from './actionTypes'

/* ACTION CREATORS */
export const fetchAllQrsStart = () => {
  return {
    type: FETCH_ALL_QRS_START,
  }
}

export const fetchAllQrsSuccess = (data) => {
  return {
    type: FETCH_ALL_QRS_SUCCESS,
    payload: data,
  }
}

export const fetchAllQrsError = (data) => {
  return {
    type: FETCH_ALL_QRS_ERROR,
    payload: data,
  }
}

export const createQrStart = () => {
  return {
    type: CREATE_QR_START,
  }
}

export const createQrSuccess = (data) => {
  return {
    type: CREATE_QR_SUCCESS,
    payload: data,
  }
}

export const createQrError = (data) => {
  return {
    type: CREATE_QR_ERROR,
    payload: data,
  }
}

export const deleteQrStart = () => {
  return {
    type: DELETE_QR_START,
  }
}

export const deleteQrSuccess = (data) => {
  return {
    type: DELETE_QR_SUCCESS,
    payload: data,
  }
}

export const deleteQrError = (data) => {
  return {
    type: DELETE_QR_ERROR,
    payload: data,
  }
}
