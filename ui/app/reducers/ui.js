export const defaultState = {
  drawer: {
    open: false
  },
  title: 'bàn dōng dōng',
};

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return Object.assign({}, defaultState, state, { drawer: { open: true } });
    case 'CLOSE_DRAWER':
      return Object.assign({}, defaultState, state, { drawer: { open: false } });
    case 'CHANGE_PAGE_TITLE':
      return Object.assign({}, defaultState, state, { title: action.title });
    default:
      return state;
  }
}
