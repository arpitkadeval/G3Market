export default function loader(state = false, action) {
    switch (action.type) {
      case "LOADER_START":
        return action.payload;
      case "LOADER_STOP":
        return action.payload;
      default:
        return state;
    }
  }