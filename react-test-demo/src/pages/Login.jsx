import React from 'react';
import LoginForm from './../components/LoginForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch({ type: 'LOGIN', payload: { username: e.username } });
    navigate('/');
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};
export default Login;
