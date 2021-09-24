import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import SimpleReactValidator from "simple-react-validator";
import { registerUser } from "../../../../Services/UserServices";

const Card = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResetForm = () => {
    setFullName("");
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
        accepted: "قوانین و مقررات سایت را باید قبول کنید.",
      },
      element: (message) => (
        <div style={{ color: "darkred", margin: "3px" }}>{message}</div>
      ),
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      fullname: fullName,
      email,
      password,
    };

    try {
      if (simpleValidator.current.allValid()) {
        setLoading(true);
        const { status, data } = await registerUser(user);

        if (status === 201) {
          alert(data.message);
          handleResetForm();
          console.log(data);
        }
      } else {
        setForceUpdate(1);
        simpleValidator.current.showMessages();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  };
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> عضویت در سایت </h2>
        </header>
        <Helmet>
          <title>عضویت در سایت </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="form-layer">
          <form action="" method="" onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                name="fullName"
                type="text"
                className="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                onChange={(event) => setFullName(event.target.value)}
                value={fullName}
              />
              {simpleValidator.current.message(
                "fullName",
                fullName,
                "required|string"
              )}
            </div>

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
                onChange={(event) => setEmail(event.target.value)}
                value={email}
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              {simpleValidator.current.message(
                "password",
                password,
                "required|min:8"
              )}
            </div>

            <div className="accept-rules">
              <label>
                <input
                  type="checkbox"
                  name="policy"
                  onClick={(event) => {
                    setPolicy(event.currentTarget.checked);
                    console.log(event.currentTarget.checked);
                  }}
                />{" "}
                قوانین و مقررات سایت را میپذیرم{" "}
                {simpleValidator.current.message("policy", policy, "accepted")}
              </label>
            </div>

            <div className="link">
              <a href="">
                {" "}
                <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !
              </a>
              <a href="">
                {" "}
                <i className="zmdi zmdi-account"></i> ورود به سایت{" "}
              </a>
            </div>

            <button className="btn btn-success" type="submit">
              {" "}
              عضویت در سایت{" "}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Card;
