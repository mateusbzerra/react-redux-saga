export default function cart(state = { repo: true }, action) {
  switch (action.type) {
    case "@repo/ADD_SUCCESS":
      return action.user;
    default:
      return state;
  }
}
