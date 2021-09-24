import { getCourse, getCourses } from "../../Services/coursesServices";

export const handleGetAllCourses = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getCourses();

      await dispatch({ type: "INIT", payload: data.courses });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const handleGetCourse = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data} = await getCourse(id);

      await dispatch({ type: "GET_COURSE", payload: data.course });
    } catch (error) {
      console.log(error.response);
    }
  };
};
