import { API_URL } from "../../api/config";
import { apiClient } from "../../api/general";

import { createBrowserHistory } from "history";
import { initLoader, stopLoader } from "../loader/loaderAction";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

export const history = createBrowserHistory();
export const login = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    apiClient({
      method: "POST",
      url: `${API_URL.auth.login}`,
      data,
    })
      .then((response) => {
        resolve(response);
        dispatch({
          type: LOGIN_USER,
          payload: {
            token: response?.data?.token,
            data: response?.data?.data,
          },
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const registration = (data) => async (dispatch) => {
  dispatch(initLoader());
  return new Promise((resolve, reject) => {
    apiClient({
      method: "POST",
      url: `${API_URL.auth.register}`,
      data,
    })
      .then((response) => {
        console.log(response, "response");
        resolve(response);
        dispatch({
          type: REGISTER_USER,
          payload: {
            registerData: response.message,
            data: response.data.email,
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

export const logout = () => {
  return {
    type: LOGOUT_USER,
    payload: {},
  };
};
