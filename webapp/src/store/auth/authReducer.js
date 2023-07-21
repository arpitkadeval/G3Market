import { defaultAxios } from "../../api/general";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

const initialState = {
  data: {} || null,
  token: localStorage.getItem("token") || null,
  registerData: null,
};

if (initialState.token)
  defaultAxios.defaults.headers.common["Authorization"] =
    "Bearer " + initialState.token;

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("token", action?.payload?.token);
      localStorage.setItem("userData", action.payload.data.id);
      // localStorage.setItem("role", action?.payload?.role);
      defaultAxios.defaults.headers.common["Authorization"] =
        "Bearer " + action.payload.token;
      return {
        token: action?.payload?.token,
        data: action?.payload?.data,
      };
    case REGISTER_USER:
      return {
        registerData: action?.payload?.registerData,
        data: action?.payload?.data,
      };
    case LOGOUT_USER:
      delete defaultAxios.defaults.headers.common["Authorization"];
      return {
        token: null,
        data: null,
      };

    // case TOKEN_USER_DATA_HANDLER:
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    default:
      return state;
  }
}
