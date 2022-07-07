import React from "react";
import Contact from "../components/Contact";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <h1>Home</h1>
        <Contact />
      </MainLayout>
    </div>
  );
};

export default Home;
