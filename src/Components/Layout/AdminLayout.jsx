import Footer from "../Common/Footer/Footer";
import MainMenu from "../Common/MainMenu/MainMenu";

const AdminLayout = ({ children }) => {
  return (
    <>
      <MainMenu />
      {children}
      <Footer />
    </>
  );
};

export default AdminLayout;
