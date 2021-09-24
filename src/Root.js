import HomePage from "./Components/Staging/HomePage/HomePage";
import Login from "./Components/Admin/Login/Login";
import Register from "./Components/Admin/Register/Register";
import { Redirect, Route, Switch } from "react-router";
import Archive from "./Components/Staging/Archive/Archive";
import Single from "./Components/Staging/Single/Single";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "./Utils/pagination";
import { useEffect } from "react";
import { handleClearUser, handleLogin } from "./Redux/Actions/userActions";
import Logout from "./Components/Admin/Logout/Logout";
import Profile from "./Components/Admin/Profile/Profile";

export default function Root() {
  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const items = pagination(courses, 8, 1);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodeToken = JSON.parse(atob(token.split(".")[1]));

      const dateNow = Date.now() / 1000;

      if (dateNow > decodeToken.exp) {
        localStorage.removeItem("token");

        dispatch(handleClearUser());
      }
      dispatch(handleLogin(decodeToken.user));
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage courses={items} />} />
        <Route
          path="/login"
          render={() =>
            Object.keys(user).length === 0 ? <Login /> : <Redirect to="/" />
          }
        />
        <Route
          path="/logout"
          render={() =>
            Object.keys(user).length !== 0 ? <Logout /> : <Redirect to="/" />
          }
        />
        <Route
          path="/register"
          render={() =>
            Object.keys(user).length === 0 ? <Register /> : <Redirect to="/" />
          }
        />
        <Route path="/archive" render={() => <Archive />} />
        <Route path="/course/:id" render={() => <Single />} />
        <Route
          path="/user-profile"
          render={() =>
            Object.keys(user).length !== 0 ? <Profile /> : <Redirect to="/" />
          }
        />
      </Switch>
    </>
  );
}
