const BASE_URL = "http://localhost:5000/api";

export const API_URL = {
  auth: {
    register: `${BASE_URL}/users/register`,
    login: `${BASE_URL}/users/login`,
    google: `${BASE_URL}/users/google`,
    facebook: `${BASE_URL}/users/facebook`,
  },
  users:{
    getUser:`${BASE_URL}/users`,
  }
};
