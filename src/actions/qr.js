import {
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
