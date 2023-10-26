/* REDUCER */

import {
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
    default:
      return state
  }
}
