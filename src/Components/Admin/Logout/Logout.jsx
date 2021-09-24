import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { handleClearUser } from "../../../Redux/Actions/userActions";

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  localStorage.removeItem("token");

  dispatch(handleClearUser());

  history.push("/");
  return null;
};

export default withRouter(Logout);
