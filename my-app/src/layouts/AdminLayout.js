import Footer from "../components/core/Footer";
import Navigbar from "../components/core/Navigbar";
const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navigbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;