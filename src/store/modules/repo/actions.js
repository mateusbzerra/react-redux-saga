export function getUser(username) {
  return {
    type: "@repo/ADD_REQUEST",
    username
  };
}
export function getUserSuccess(user) {
  return {
    type: "@repo/ADD_SUCCESS",
    user
  };
}
