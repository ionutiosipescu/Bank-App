export const selectAuth = (state) => state.currentUser.auth;
export const selectCurrentUser = (state) => state.currentUser.userData;

export const selectUserAccount = (state) => state.currentUser.userData.account;

export const selectUserDetail = (state) =>
  state.currentUser.userData.userDetail;
