const initialState = { username: '' }

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        username: action.payload.username,
      }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

export { AuthReducer }
