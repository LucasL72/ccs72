import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navigbar from "../components/core/Navigbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
