const initialState = { username: '', isLoggedIn: false };

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        logging: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        logging: false,
        username: action.payload.username,
      };
    case 'LOGIN_FAIL':
      return {
        logging: false,
        error: action.payload.error,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}

export { AuthReducer };
