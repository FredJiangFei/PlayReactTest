import authService from '../../services/authService';

export const UserConstants = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT'
};

export const LoginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: UserConstants.LOGIN });
    const res = await authService.login(username, password);
    authService.setJwt(res.token);
    dispatch({ type: UserConstants.LOGIN_SUCCESS, payload: { username: 'fred' } });
  } catch (error) {
    dispatch({ type: UserConstants.LOGIN_FAIL, payload: { error: error.error } });
  }
};

export const LogoutAction = () => async (dispatch) => {
    authService.logout();
    dispatch({ type: UserConstants.LOGOUT });
  };
