import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Header() {
  const {
    authState: { isLoggedIn, user },
    logOutUser,
  } = useContext(AuthContext)
  return (
    <div className="header">
      <h2 className="header__logo">QR Scanner</h2>
      <div className="header__items">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/history">
          History
        </Link>
      </div>
      <div className="header__items ml-auto">
        {!isLoggedIn ? (
          <>
            <Link className="header__link" to="/login">
              Login
            </Link>
            <Link className="header__link" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <button className="header__link" type="button" onClick={logOutUser}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
