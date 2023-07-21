import { defaultAxios } from "../../api/general";
import { GET_USER } from "../types";

const initialState = {
  userDetail: {} || null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userDetail: action?.payload?.data,
      };

    default:
      return state;
  }
}
