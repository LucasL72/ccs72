import React from "react";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import MainLayout from "../layouts/MainLayout";

const PBlog = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Nos Actualités</h2>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default PBlog;
