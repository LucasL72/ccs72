import Footer from "../components/core/Footer";
import Navigbar from "../components/core/Navigbar";
import { Navigate } from "react-router-dom";
import ScrollButton from "../components/core/ScrollButton";
import jwt_decode from "jwt-decode";

const AdminLayout = ({ children }) => {
  if (!localStorage.getItem("user_token")) return <Navigate to="/" />;
  else {
    const token = jwt_decode(localStorage.getItem("user_token"));
    if (token.isVerified === 1 && token.isAdmin === 1)
      return (
        <div>
          <Navigbar /> <main>{children}</main>
          <ScrollButton />
          <Footer />
        </div>
      );
    else return <Navigate to="/" />;
  }
};

export default AdminLayout;
