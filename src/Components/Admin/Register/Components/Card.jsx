
import { useState } from "react";
import { registerUser } from "../../../../Services/UserServices";

const Card = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleResetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      fullname: fullName,
      email,
      password,
    };

    try {
      const { status, data } = await registerUser(user);

      if (status === 201) {
        alert(data.message);
        handleResetForm();
        console.log(data);
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

        <div className="form-layer">
          <form action="" method="" onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                onChange={(event) => setFullName(event.target.value)}
                value={fullName}
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>

            <div className="accept-rules">
              <label>
                <input type="checkbox" name="" /> قوانین و مقررات سایت را
                میپذیرم{" "}
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
