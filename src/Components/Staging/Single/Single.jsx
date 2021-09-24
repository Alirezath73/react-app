import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { handleGetCourse } from "../../../Redux/Actions/coursesActions";
import AdminLayout from "../../Layout/AdminLayout";

const Single = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetCourse(match.params.id));
  }, []);

  const course = useSelector((state) => state.course);

  return (
    <>
      <AdminLayout>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#"> تاپ لرن </a>
              </li>
              <li className="breadcrumb-item active">
                <a href="#"> دوره ها </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {" "}
                دوره آموزشی ساخت ربات تلگرام{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <section className="term-content">
            <header>
              <h1> دوره آموزشی ساخت ربات تلگرام </h1>
            </header>
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                <section className="term-description">
                  <img
                    alt="img"
                    src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                  />

                  <h2>{course.title}</h2>
                  <p>{course.info}</p>
                </section>
              </div>

              <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                <div className="statistics">
                  <a href=""> شرکت در دوره : {course.price} تومان </a>
                </div>

                <article className="term-info">
                  <h2> اطلاعات این دوره </h2>
                  <ul>
                    <li>سطح دوره: پیشرفته</li>
                    <li>وضعیت دوره: در حال برگزاری</li>
                    <li>قیمت : {course.price} تومان</li>
                  </ul>
                </article>

                <div className="share-layer">
                  <span> به اشتراک گذاری </span>
                  <a href="">
                    <i className="zmdi zmdi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="zmdi zmdi-google-old"></i>
                  </a>
                  <a href="">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                </div>

                <div className="tags-layer">
                  <a href="">{course.title}</a>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </AdminLayout>
    </>
  );
};

export default withRouter(Single);
