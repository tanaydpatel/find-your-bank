export default function favorites(state = [], action) {
  switch (action.type) {
    case "SET_FAVORITES": {
      console.log("in setter", action.payload);
      return Object.assign([], action.payload);
    }
    default:
      return state;
  }
}
