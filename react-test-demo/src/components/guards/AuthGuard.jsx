import * as React from 'react'
import { Navigate } from 'react-router-dom'
import authService from '../../services/authService'

function AuthGuard({ children }) {
  if (!authService.getCurrentUser()) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default AuthGuard
