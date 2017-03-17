export const defaultState = {
  signedIn: false
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SIGNIN':
      return Object.assign({}, defaultState, state, { signedIn: true });
    case 'SIGNOUT':
      return Object.assign({}, defaultState, { signedIn: false });
    case 'UPDATE_USER_DATA':
      return Object.assign({}, defaultState, state, { ...action.user });
    default:
      return state;
  }
}
