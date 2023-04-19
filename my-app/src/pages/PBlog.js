import React from "react";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import MainLayout from "../layouts/MainLayout";
import { Seo } from "../components/Seo";

const PBlog = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <div>
      <MainLayout>
        <Seo
          title="Notre Blog | Charpente Converture de la Sarthe"
          description="Retrouvez ici nos actualités les plus récentes. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <h2 className="text-center ssligne">Nos Actualités</h2>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default PBlog;
