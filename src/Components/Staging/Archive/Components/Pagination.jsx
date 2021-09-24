import { numberRange } from "../../../../Utils/helpers";

const Pagination = ({ totalPage, handleCurrentPage }) => {
  const pages = numberRange(1, totalPage + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {/* <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">
              <i className="zmdi zmdi-chevron-right"></i>
            </span>
          </a>
        </li> */}
        <li className="page-item">
          {pages.map((page) => (
            <a
              className="page-link"
              href="#"
              onClick={() => handleCurrentPage(page)}
            >
              {page}
            </a>
          ))}
        </li>
        {/* <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">
              <i className="zmdi zmdi-chevron-left"></i>
            </span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
