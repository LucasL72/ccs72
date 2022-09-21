import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import Navigbar from "../components/core/Navigbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check } from "../store/actions/UsersActions";
import ScrollButton from "../components/core/ScrollButton";
const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("user_token"))
      localStorage.setItem("user_token", "visitor");
    dispatch(check());
  }, []);
  return (
    <div>
      <Navigbar /> <Header />
      <main>{children}</main>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
