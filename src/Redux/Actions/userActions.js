export const handleLogin = (user) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "LOG_IN", payload: user });
  };
};

export const handleClearUser = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "CLEAR_USER", payload: {} });
  };
};
