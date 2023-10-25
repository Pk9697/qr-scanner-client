import { useLocation } from 'react-router-dom'

function useRedirect(isLoggedIn) {
  const location = useLocation()
  if (isLoggedIn) {
    if (location.state) {
      return location.state.data
    }
    return '/'
  }
  return null
}

export default useRedirect
