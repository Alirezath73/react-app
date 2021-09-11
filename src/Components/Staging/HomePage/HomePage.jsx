import { withRouter } from "react-router";
import StagingLayout from "../../Layout/StagingLayout";
import Card from "./Components/Card";
import Header from "./Components/Header";

const HomePage = (props) => {
  console.log(props);
  return (
    <StagingLayout>
      <main id="home-page">
        <div className="container">
          <section className="terms-items">
            <Header />
            <div className="row">
              <Card />
            </div>
          </section>
        </div>
      </main>
    </StagingLayout>
  );
};

export default withRouter(HomePage);
