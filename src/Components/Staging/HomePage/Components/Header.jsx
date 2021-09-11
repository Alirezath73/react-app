import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2> آخرین دوره های تاپ لرن </h2>
      <Link to="/archive"> مشاهده همه دوره ها </Link>
    </header>
  );
};

export default Header;
