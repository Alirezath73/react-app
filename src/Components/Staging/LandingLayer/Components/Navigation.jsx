import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav>
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <ul>
            <li>
              <a href=""> همکاری در فروش </a>
              <a href=""> درباره ما </a>
              <a href=""> تماس با ما </a>
            </li>
          </ul>
        </div>
        {Object.keys(user).length !== 0 ? (
          <div className="col-sm-6 col-xs-12">
            <div className="clientarea">
              <div className="loggein ">
                <i className="zmdi zmdi-account"></i>
                <Link to="/user-profile"> {user.fullname} ، خوش آمدی </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
