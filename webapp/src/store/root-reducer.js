import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import loader from "./loader/loaderReducer";
import users from "./users/userReducer";

export default combineReducers({
  loader,
  auth: authReducer,
  users: users,
});
