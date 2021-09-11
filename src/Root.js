import HomePage from "./Components/Staging/HomePage/HomePage";
import Login from "./Components/Admin/Login/Login";
import Register from "./Components/Admin/Register/Register";
import { Route, Switch } from "react-router";
import Archive from "./Components/Staging/Archive/Archive";
import Single from "./Components/Staging/Single/Single";

export default function Root() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/archive" render={() => <Archive />} />
        <Route path="/single" render={() => <Single />} />
      </Switch>
    </>
  );
}
