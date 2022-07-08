import React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Events from "../components/Events";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Blog />
        <Events />
        <Contact />
      </MainLayout>
    </div>
  );
};

export default Home;
