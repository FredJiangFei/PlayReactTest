import { UserConstants } from "../actions/auth.actions";

const initialState = { username: '', isLoggedIn: false };

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case UserConstants.LOGIN:
      return {
        logging: true,
      };
    case UserConstants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        logging: false,
        username: action.payload.username,
      };
    case UserConstants.LOGIN_FAIL:
      return {
        logging: false,
        error: action.payload.error,
      };
    case UserConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export { AuthReducer };
