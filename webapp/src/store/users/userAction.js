import { API_URL } from "../../api/config";
import { apiClient } from "../../api/general";
import { initLoader, stopLoader } from "../loader/loaderAction";
import { GET_USER } from "../types";

export const getUser = (id) => async (dispatch) => {
  dispatch(initLoader());

  return new Promise((resolve, reject) => {
    apiClient({
      method: "GET",
      url: `${API_URL.users.getUser}/${id}`,
    })
      .then((response) => {
        resolve(response);
        dispatch({
          type: GET_USER,
          payload: {
            data: response?.data,
          },
        });
        dispatch(stopLoader());
      })
      .catch((error) => {
        dispatch(stopLoader());
        reject(error);
      });
  });
};
