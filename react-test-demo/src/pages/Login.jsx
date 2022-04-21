import React, { useState } from 'react';
import LoginForm from './../components/LoginForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState()  

  const handleSubmit = async (e) => {
    setError(null);
    try {
      await authService.login(e.username, e.password);
      navigate('/');
      //eve.holt@reqres.in, cityslicka

    } catch (error) {
      setError(error.error);
    }
    // dispatch({ type: 'LOGIN', payload: { username: e.username } });
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
      <h5 data-testid="test-error" style={{ color: 'red' }}>{error}</h5>
    </>
  );
};
export default Login;
