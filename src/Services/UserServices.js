import Http from "./HttpService";

export const registerUser = (user) => {
  return Http.post(`/register`, user);
};

export const loginUser = (user) => {
  return Http.post("/login", user);
};
