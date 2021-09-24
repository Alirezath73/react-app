import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { handleGetAllCourses } from "../Actions/coursesActions";
import { reducers } from "../Reducers";

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// init
store.dispatch(handleGetAllCourses());

// log
store.subscribe(() => console.log(store.getState()));
