import { signIn, signOut, updateUserData } from '../current-user';

describe('signIn()', () => {
  it('returns SIGNIN actions', () => {
    expect(signIn()).toMatchObject({ type: 'SIGNIN' });
  });
});

describe('signOut()', () => {
  it('returns SIGNOUT action', () => {
    expect(signOut()).toMatchObject({ type: 'SIGNOUT' });
  });
});

describe('updateUserData()', () => {
  it('returns action', () => {
    const user = {
      username: 'antono',
      email: 'antono.vasiljev@gmail.com',
    };

    expect(updateUserData(user))
      .toMatchObject({
        type: 'UPDATE_USER_DATA',
        user,
      });
  });
});
