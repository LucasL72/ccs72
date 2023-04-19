import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import Réas from "../../components/Réas";
import { getNews } from "../../store/actions/ArticlesActions";
import { Seo } from "../../components/Seo";

const Réalisations = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Seo
          title="Nos Réalisations | Charpente Converture de la Sarthe"
          description="Retrouvez ici toutes nos réalisations. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <h2 className="text-center ssligne mt-3 mb-3">
          Découvrez nos réalisations
        </h2>
        <Réas />
        <h3 className="text-center ssligne mt-3 mb-3">
          Découvrez nos actualités
        </h3>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default Réalisations;
