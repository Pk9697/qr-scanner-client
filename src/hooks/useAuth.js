import { useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import { APIUrls } from '../helpers/utils'
import {
  authenticateUserError,
  authenticateUserStart,
  authenticateUserSuccess,
  logOut,
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from '../actions/auth'
import authReducer from '../reducers/auth'

const initialState = {
  user: {},
  token: null,
  error: null,
  isLoggedIn: false,
  inProgress: false,
}

function useAuth() {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      // eslint-disable-next-line no-use-before-define
      authenticateUser({ user, token })
    }
  }, [])

  const loginUser = async (formFields) => {
    dispatch(loginStart())
    const url = APIUrls.login()
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    })
    const data = await res.json()
    if (data.success) {
      localStorage.setItem('token', data.data.token)
      dispatch(loginSuccess(data.data))
    } else {
      dispatch(loginError(data.message))
    }
  }

  const authenticateUser = async ({ user, token }) => {
    dispatch(authenticateUserStart())
    const url = APIUrls.authenticateUser()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      localStorage.setItem('token', token)
      dispatch(authenticateUserSuccess({ user, token }))
    } else {
      dispatch(authenticateUserError(data.message))
    }
  }

  const logOutUser = () => {
    dispatch(logOut())
  }

  const registerUser = async (formFields) => {
    dispatch(registerStart())
    const url = APIUrls.register()
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    })
    const data = await res.json()
    if (data.success) {
      localStorage.setItem('token', data.data.token)
      dispatch(registerSuccess(data.data))
    } else {
      dispatch(registerError(data.message))
    }
  }

  return { authState, loginUser, authenticateUser, logOutUser, registerUser }
}

export default useAuth
