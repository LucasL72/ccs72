import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { getNews } from "../store/actions/ArticlesActions";
import Réas from "../components/Réas";
import Intro from "../components/Intro";
import CookieConsent from "react-cookie-consent";
import { Seo } from "../components/Seo";

const Home = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvent());
  }, []);

  return (
    <div>
      <MainLayout>
        <Seo
          title="Accueil | Charpente Converture de la Sarthe"
          description="Bienvenue sur le site de Charpente Converture de la Sarthe. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <Intro />
        <Réas />
        <h3 className="text-center ssligne">Découvrez notre actualité</h3>
        <ListBlog list={listArticles} />
        <br></br>
        <div className="text-center contact">
          <a className="btn-contact" href="/Contact">
            Nous contacter
          </a>
        </div>
        <br></br>
        <CookieConsent
          buttonText="J'accepte"
          location="bottom"
          buttonStyle={{
            background: "#0052d4",
            color: "white",
          }}
          expires={180}
        >
          Nous utilisons des cookies pour vous donner la meilleure expérience en
          ligne. En utilisant notre site, vous acceptez notre utilisation des
          cookies en conformité avec notre politique de cookie.{" "}
          <a href="/Politiques">En savoir plus.</a>
        </CookieConsent>
      </MainLayout>
    </div>
  );
};

export default Home;
