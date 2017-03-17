import reducer, { defaultState } from '../ui';
import { openDrawer, closeDrawer, changePageTitle } from '../../actions/ui';

describe('uiReducer', () => {
  it('has default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  describe('on OPEN_DRAWER', () => {
    it('changes drawer.open to true', () => {
      expect(reducer({}, openDrawer()))
        .toEqual(Object.assign({}, defaultState, {
          drawer: { open: true }
        }));
    });
  });

  describe('on CLOSE_DRAWER', () => {
    it('changes drawer.open to false', () => {
      expect(reducer({}, closeDrawer()))
        .toEqual(Object.assign({}, defaultState, {
          drawer: { open: false }
        }));
    });
  });

  describe('on CHANGE_PAGE_TITLE', () => {
    it('changes title', () => {
      const title = 'Hello World';
      expect(reducer({}, changePageTitle(title)))
        .toEqual(Object.assign({}, defaultState, { title }));
    });
  });
});
