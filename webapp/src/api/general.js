import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const defaultHeaders = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};
export const defaultAxios = axios.create({});

export function apiClient({
  url,
  data = {},
  method = "POST",
  headers = {},
  noHeaders,
  ...rest
}) {
  if (
    localStorage.getItem("token") === "" ||
    localStorage.getItem("token") === null
  ) {
    delete defaultAxios.defaults.headers.common["Authorization"];
  }
  // toast.configure();
  return new Promise((resolve, reject) => {
    defaultAxios({
      method,
      url,
      headers: {
        ...(noHeaders ? {} : defaultHeaders),
        ...headers,
      },
      data,
      ...rest,
    })
      .then((res) => {
        if (res.data && res.data.status) {
          resolve(res.data);
        } else {
          if (res.data && res.data.error) {
            console.error(res.data.error);
            reject(res.data.error);
            if (res.data.error.code === "ER_UNAUTHORIZED_CLIENT") {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("emailId");
              localStorage.removeItem("firstName");
              localStorage.removeItem("lastName");
              // history.push('/login')
              delete defaultAxios.defaults.headers.common["Authorization"];
              // toast.error('Please Reload the Page and Login Again');
            } else if (res.data.statusCode === 400) {
            }
            // else {
            //   toast.error(res.data.error.message);
            // }
          } else {
            reject(res.data.error);
          }
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
