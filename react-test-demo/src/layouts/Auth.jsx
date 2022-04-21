import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <>
      <h1>Auth</h1>
      <Outlet />
    </>
  )
}

export default AuthLayout
