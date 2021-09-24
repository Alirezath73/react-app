import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleGetCourse } from "../../../../Redux/Actions/coursesActions";

const Card = ({ courses }) => {
  const dispatch = useDispatch();
  return (
    <>
      {courses.map((course) => (
        <div
          key={course._id}
          className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
        >
          <article>
            <Link to={`/courses/${course._id}`} className="img-layer">
              <img
                alt="img"
                src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
              />
            </Link>
            <h2>
              <Link
                to={`/course/${course._id}`}
                // onClick={() => dispatch(handleGetCourse(course._id))}
              >
                {course.title}
              </Link>
            </h2>
            <span>{course.price}</span>
            <i>1:52:32</i>
          </article>
        </div>
      ))}
    </>
  );
};

export default Card;
