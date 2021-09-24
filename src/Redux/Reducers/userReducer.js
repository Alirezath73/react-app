export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };

    case "CLEAR_USER":
      return { ...action.payload };

    default:
      return state;
  }
};
