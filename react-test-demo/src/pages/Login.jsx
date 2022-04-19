import React from 'react';
import LoginForm from './../components/LoginForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      const res = await userService.login(e.username, e.password);
      console.log(res);
      //eve.holt@reqres.in, cityslicka

    } catch (error) {
      console.log(error);
    }
    // dispatch({ type: 'LOGIN', payload: { username: e.username } });
    // navigate('/');
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />

    </>
  );
};
export default Login;
