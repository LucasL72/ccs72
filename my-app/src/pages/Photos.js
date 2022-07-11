import React from "react";
import Album from "../components/Album";
import MainLayout from "../layouts/MainLayout";

const Photos = () => {
  return (
    <div>
      <MainLayout>
        <h1 className="text-center ssligne">Photos</h1>
        <Album />
      </MainLayout>
    </div>
  );
};

export default Photos;
