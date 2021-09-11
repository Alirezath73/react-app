import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
      <article>
        <a href="" className="img-layer">
          <img src="images/pic/1.jpg" />
        </a>
        <h2>
          <Link to="/single"> آموزش متریال دیاین در زامارین </Link>
        </h2>
        <span> رایگان </span>
        <i>1:52:32</i>
      </article>
    </div>
  );
};

export default Card;
