import { useState } from "react";
import { useSelector } from "react-redux";
import { pagination } from "../../../Utils/pagination";
import AdminLayout from "../../Layout/AdminLayout";
import Aside from "./Components/Aside";
import BreadCrumb from "./Components/BreadCrumb";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

const Archive = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const allCourses = useSelector((state) => state.courses);

  const totalPage = Math.ceil(allCourses.length / itemsPerPage);

  const courses = pagination(allCourses, itemsPerPage, currentPage);

  return (
    <AdminLayout>
      <BreadCrumb />

      <div className="container">
        <section className="term-categories">
          <div className="row">
            <Aside />
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <section className="terms-items">
                <div className="row">
                  <Card courses={courses} />
                </div>
                <Pagination
                  totalPage={totalPage}
                  handleCurrentPage={handleCurrentPage}
                />
              </section>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default Archive;
