import Footer from "../Common/Footer/Footer";
import LandingLayer from "../Staging/LandingLayer/LandingLayer";
import MainMenu from "../Common/MainMenu/MainMenu";

const StagingLayout = ({ children }) => {
  return (
    <>
      <LandingLayer />
      <MainMenu />
      {children}
      <Footer />
    </>
  );
};

export default StagingLayout;
