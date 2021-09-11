import AdminLayout from "../../Layout/AdminLayout";
import Aside from "./Components/Aside";
import BreadCrumb from "./Components/BreadCrumb";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

const Archive = () => {
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
                  <Card />
                </div>
                <Pagination />
              </section>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default Archive;
