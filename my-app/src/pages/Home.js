import React from "react";
import FormContact from "../components/FormContact";
import Events from "../components/Events";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { getNews } from "../store/actions/ArticlesActions";
import Réas from "../components/Réas";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvent());
  }, []);

  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Découvrez notre actualité</h2>
        <ListBlog list={listArticles} />
        <Réas />

        <Events list={listEvents} />

        <h4 className="text-center ssligne mt-5">Nous contacter</h4>
        <FormContact />

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
