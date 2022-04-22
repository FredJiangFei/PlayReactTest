import React, { useEffect } from 'react';
import LoginForm from './../components/LoginForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../store/actions/user.actions';
import { useSelector } from 'react-redux';

const Login = () => {
  const { logging, error, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    //eve.holt@reqres.in, cityslicka
    dispatch(LoginAction(e.username, e.password));
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
      {logging && <h3>loading......</h3>}
      <h5 data-testid="test-error" style={{ color: 'red' }}>
        {error}
      </h5>
    </>
  );
};
export default Login;
