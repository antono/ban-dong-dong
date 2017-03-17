export function openDrawer() {
  return { type: 'OPEN_DRAWER' };
}

export function closeDrawer() {
  return { type: 'CLOSE_DRAWER' };
}

export function changePageTitle(title) {
  return { title, type: 'CHANGE_PAGE_TITLE' };
}
