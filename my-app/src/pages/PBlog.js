import React from "react";
import Blog from "../components/Blog";
import MainLayout from "../layouts/MainLayout";

const PBlog = () => {
  return (
    <div>
      <MainLayout>
        <h1 className="text-center ssligne">Nos Actualités</h1>
        <Blog />
      </MainLayout>
    </div>
  );
};

export default PBlog;
