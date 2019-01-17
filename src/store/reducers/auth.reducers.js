const initState = {
  authError: null
};

const authReducers = (state = initState, action) => {
  switch(action.type) {
    case 'LOGOUT_SUCCESS':
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.payload
      }
    default: 
      return state;
  }
};

export default authReducers;