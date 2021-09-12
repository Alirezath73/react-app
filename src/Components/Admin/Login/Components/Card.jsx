import { useRef, useState } from "react";
import { withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import { loginUser } from "../../../../Services/UserServices";

const Card = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleResetForm = () => {
    setEmail("");
    setPassword("");
  };

  const [forceUpdate, setForceUpdate] = useState(0);
  const simpleValidator = useRef(new SimpleReactValidator());

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      if (simpleValidator.current.allValid()) {
        const response = await loginUser(user);

        alert("you are login...");

        localStorage.setItem("token", response.data.token);
        handleResetForm();
        props.history.replace("/");
        // console.log(JSON.parse(atob(response.data.token.split('.')[1])));
      } else {
        setForceUpdate(1);
        simpleValidator.current.showMessages();
      }
    } catch (error) {
      // alert(error.response.data.message);
      console.log(error.response);
    }
  };

  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> ورود به سایت </h2>
        </header>

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
                onBlur={() => {
                  setForceUpdate(1);
                  simpleValidator.current.showMessageFor("email");
                }}
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
                type="text"
                className="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.currentTarget.value);
                }}
              />
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
