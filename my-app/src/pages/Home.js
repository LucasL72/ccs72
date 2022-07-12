import React from "react";
import Blog from "../components/Blog";
import FormContact from "../components/FormContact";
import Events from "../components/Events";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
      <h1 className="text-center ssligne">Récents</h1>
        <Blog />
        <Events />
        <FormContact />
      </MainLayout>
    </div>
  );
};

export default Home;
