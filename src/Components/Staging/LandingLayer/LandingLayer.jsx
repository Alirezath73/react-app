import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Search from "./Components/Search";

const LandingLayer = () => {
  return (
    <div className="landing-layer">
      <div className="container">
        <Navigation />
        <Header />
        <Search />
      </div>
    </div>
  );
};

export default LandingLayer;
