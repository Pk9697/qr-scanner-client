/* REDUCER */

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
} from '../actions/actionTypes'

export default function qrReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL_QRS_START: {
      return {
        ...state,
        qrs: [],
        inProgress: true,
        error: null,
      }
    }
    case FETCH_ALL_QRS_SUCCESS: {
      return {
        ...state,
        qrs: action.payload,
        inProgress: false,
        error: null,
      }
    }
    case FETCH_ALL_QRS_ERROR: {
      return {
        ...state,
        qrs: [],
        inProgress: false,
        error: action.payload,
      }
    }

    case CREATE_QR_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case CREATE_QR_SUCCESS: {
      return {
        ...state,
        qrs: [action.payload, ...state.qrs],
        inProgress: false,
        error: null,
      }
    }
    case CREATE_QR_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }

    case DELETE_QR_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case DELETE_QR_SUCCESS: {
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        qrs: state.qrs.filter((qr) => qr._id !== action.payload),
        inProgress: false,
        error: null,
      }
    }
    case DELETE_QR_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }

    default:
      return state
  }
}
