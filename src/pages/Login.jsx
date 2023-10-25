import { Navigate } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

function Login() {
  const { email, password, inProgress, redirect, handleChange, handleSubmit } =
    useLogin()

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="login">
      <form
        onSubmit={handleSubmit}
        className="widget-wrapper mw-700 login-wrapper"
      >
        <input
          name="email"
          value={email}
          onChange={handleChange}
          className="login__input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          className="login__input"
          type="password"
          placeholder="Password"
          required
        />
        <button
          disabled={inProgress}
          type="submit"
          className="login__input login__btn"
        >
          {inProgress ? 'LOGGING IN' : 'LOG IN'}
        </button>
      </form>
    </div>
  )
}

export default Login
