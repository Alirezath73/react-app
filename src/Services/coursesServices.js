import HttpService from "./HttpService";

export const getCourses = () => {
  return HttpService.get("/courses");
};

export const getCourse = (id) => {
  return HttpService.get(`/course/${id}`);
};
