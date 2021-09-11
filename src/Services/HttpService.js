import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 2500;

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

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
