import {  NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="container">
        <nav>
          <span className="responsive-sign">
            <i className="zmdi zmdi-menu"></i>
          </span>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "#000000" }}>
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeStyle={{ color: "#000000" }}>
                ثبت نام در سایت
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeStyle={{ color: "#000000" }}>
                ورود به سایت
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;
