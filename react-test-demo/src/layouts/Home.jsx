import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router';
import { LogoutAction } from '../store/actions/user.actions';
import { useDispatch } from 'react-redux';

const HomeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(LogoutAction());
    navigate('/login');
  };

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
  );
};

export default HomeLayout;
