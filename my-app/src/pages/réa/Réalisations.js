import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import Réas from "../../components/Réas";

const Réalisations = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Réas />
        <h2 className="text-center ssligne mt-3">Découvrez nos réalisations</h2>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default Réalisations;
