import React from "react";
import FormContact from "../components/FormContact";
import Events from "../components/Events";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";
import ListBlog from "../components/Admin/Blog/ListBlog";
import { getNews } from "../store/actions/ArticlesActions";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
    dispatch(getEvent());
  }, []);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 75;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div>
      <MainLayout>
        <h2 className="text-center ssligne">Récents</h2>
        <div className="reveal">
          <ListBlog list={listArticles} />
        </div>
        <div className="reveal">
          <Events list={listEvents} />
        </div>
        <div className="reveal">
          <FormContact />
        </div>
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
          <a href="/#/Cgu">En savoir plus.</a>
        </CookieConsent>
      </MainLayout>
    </div>
  );
};

export default Home;
