import { Navigate } from 'react-router-dom'
import useRegister from '../hooks/useRegister'

function Register() {
  const {
    name,
    email,
    password,
    confirmPassword,
    inProgress,
    redirect,
    handleChange,
    handleSubmit,
  } = useRegister()

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
          name="name"
          value={name}
          onChange={handleChange}
          className="login__input"
          type="text"
          placeholder="Name"
          required
        />
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
        <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          className="login__input"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button
          disabled={inProgress}
          type="submit"
          className="login__input login__btn"
        >
          {inProgress ? 'LOGGING IN' : 'REGISTER'}
        </button>
      </form>
    </div>
  )
}

export default Register
