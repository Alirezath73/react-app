import { useRef, useState } from "react";
import { withRouter } from "react-router";

import SimpleReactValidator from "simple-react-validator";
import { loginUser } from "../../../../Services/UserServices";
import { Lines } from "react-preloaders";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../../../Redux/Actions/userActions";

const Card = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleResetForm = () => {
    setEmail("");
    setPassword("");
  };

  const [forceUpdate, setForceUpdate] = useState(0);
  const simpleValidator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "لطفا این فیلد را وارد کنید.",
        email: "لطفا ایمیل وارد کنید.",
        min: "حداقل باید ۸ کاراکتر وارد کنید.",
      },
      element: (message) => (
        <div style={{ color: "darkred", margin: "3px" }}>{message}</div>
      ),
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      if (simpleValidator.current.allValid()) {
        setLoading(true);
        const response = await loginUser(user);

        const decodeToken = JSON.parse(atob(response.data.token.split(".")[1]));

        dispatch(handleLogin(decodeToken.user));

        localStorage.setItem("token", response.data.token);
        setLoading(false);
        handleResetForm();
        props.history.push("/");
      } else {
        setForceUpdate(1);
        simpleValidator.current.showMessages();
      }
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> ورود به سایت </h2>
        </header>
        <Helmet>
          <title>ورود به سایت </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        {loading ? <Lines customLoading={loading} time={0} /> : null}
        <div className="form-layer">
          <form action="" method="" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
                /* onBlur={() => {
                  setForceUpdate(1);
                  simpleValidator.current.showMessageFor("email");
                }} */
              />
              {simpleValidator.current.message(
                "email",
                email,
                "required|email"
              )}
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                name="password"
                type="text"
                className="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                }}
                /* onBlur={() => {
                  setForceUpdate(1);
                  simpleValidator.current.showMessageFor("password");
                }} */
              />
              {simpleValidator.current.message(
                "password",
                password,
                "required|min:8"
              )}
            </div>

            <div className="remember-me">
              <label>
                <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
              </label>
            </div>

            <div className="link">
              <a href="">
                {" "}
                <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده
                ام !
              </a>
              <a href="">
                {" "}
                <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
              </a>
            </div>

            <button className="btn btn-success"> ورود به سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Card);
