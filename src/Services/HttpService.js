import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 2500;

const token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      !(
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      )
    ) {
      alert("server error...");
    }

    if (error.response && error.response.status === 422) {
      alert("un processable entity");
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
