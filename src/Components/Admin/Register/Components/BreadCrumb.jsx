const BreadCrumb = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">تاپ لرن</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            عضویت در سایت
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;
