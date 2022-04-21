import { Link } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router'
import authService from '../services/authService'

const HomeLayout = () => {
  const navigate = useNavigate()

  const logout = () => {
    authService.logout()
    navigate('/login')
  }

  return (
    <>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <Link to="/users">Users</Link>
      <button onClick={logout}>Logout</button>
      <Outlet />
    </>
  )
}

export default HomeLayout
