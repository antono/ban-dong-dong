import reducer, { defaultState } from '../current-user-reducer';
import { signIn, signOut, updateUserData } from '../../actions/current-user';

describe('currentUserRecuder', () => {
  it('creates default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  describe('on SIGNIN', () => {
    it('changes signIn to true', () => {
      expect(reducer({}, signIn())).toEqual({ signedIn: true });
    });
  });

  describe('on SIGNOUT', () => {
    it('changes signIn to false', () => {
      expect(reducer({}, signOut())).toEqual({ signedIn: false });
    });

    it('cleans up other state', () => {
      expect(reducer({ hello: 'world' }, signOut()))
        .toEqual({ signedIn: false });
    });
  });

  describe('on UPDATE_USER_DATA', () => {
    it('changes user to state', () => {
      const user = {
        username: 'antono',
        email: 'antono.vasiljev@gmail.com',
      };

      expect(reducer({}, updateUserData(user)))
        .toEqual({ signedIn: false, ...user });

      expect(reducer({ signedIn: true }, updateUserData(user)))
        .toEqual({ signedIn: true, ...user });
    });
  });
});
