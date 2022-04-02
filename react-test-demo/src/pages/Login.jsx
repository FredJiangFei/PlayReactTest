import React from 'react'
import LoginForm from './../components/LoginForm'

const Login = () => {
  const handleSubmit = (e) => console.log(e)
  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  )
}
export default Login
