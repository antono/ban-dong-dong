import { openDrawer, closeDrawer, changePageTitle } from '../ui';

describe('changePageTitle("title")', () => {
  it('returns action', () => {
    const title = 'Hello';
    expect(changePageTitle(title)).toMatchObject({ type: 'CHANGE_PAGE_TITLE', title });
  });
});

describe('openDrawer()', () => {
  it('returns action', () => {
    expect(openDrawer()).toMatchObject({ type: 'OPEN_DRAWER' });
  });
});

describe('closeDrawer()', () => {
  it('returns action', () => {
    expect(closeDrawer()).toMatchObject({ type: 'CLOSE_DRAWER' });
  });
});
