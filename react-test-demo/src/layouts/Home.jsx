import { Link } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router'
import { LogoutAction } from '../store/actions/auth.actions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import userService from '../services/userService'

const HomeLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    getUserName()
  }, [])

  const getUserName = async () => {
    const res = await userService.getUserGreeting(1)
    setUserName(res)
  }

  const logout = () => {
    dispatch(LogoutAction())
    navigate('/login')
  }

  return (
    <>
      <div className="row">
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/todos">Todos</Link>
        <div className="column"></div>
        <div className="column">
          Hello, {userName}
          &nbsp;&nbsp;&nbsp;
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default HomeLayout
