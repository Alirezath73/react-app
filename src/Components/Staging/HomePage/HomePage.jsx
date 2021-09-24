import { Helmet } from "react-helmet";
import { withRouter } from "react-router";
import StagingLayout from "../../Layout/StagingLayout";
import Card from "./Components/Card";
import Header from "./Components/Header";

const HomePage = (props) => {
  return (
    <StagingLayout>
      <Helmet>
        <title>صفحه اصلی</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <main id="home-page">
        <div className="container">
          <section className="terms-items">
            <Header />
            <div className="row">
              <Card courses={props.courses} />
            </div>
          </section>
        </div>
      </main>
    </StagingLayout>
  );
};

export default withRouter(HomePage);
