import { toast } from "react-toastify";
export const setInToStorage = async (data) => {
  // Object.keys(data).forEach(item => {
  await localStorage.setItem("token", data.token);
  // })
};

export const getFromStorage = (key) => {
  return localStorage.getItem(key);
};

export const toastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
