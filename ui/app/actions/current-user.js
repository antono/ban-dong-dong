export function signIn(user) {
  return { type: 'SIGNIN', user };
}

export function signOut() {
  return { type: 'SIGNOUT' };
}

export function updateUserData(user) {
  return { type: 'UPDATE_USER_DATA', user };
}
