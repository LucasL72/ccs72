import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Pergolas = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
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
        <Container>
          <h1 className="text-center ssligne">Pergolas Bois</h1>
          <div className="reveal">
            <Row>
              <Col md={6} className="d-flex justify-content-center">
                <img
                  alt="pergolas"
                  src="./images/pergolas.webp"
                  className=" img-border img-fluid d-flex justify-content-center"
                ></img>
              </Col>

              <Col md={6} className="mt-5">
                <p className="justif">
                  Si vous voulez profiter de votre jardin toute l’année,
                  l’installation d’une pergola est très intéressante. Cet espace
                  vous permettra de déstresser et de vous protéger du soleil, de
                  la chaleur, de la pluie, etc. Grâce à une pergola, vous pouvez
                  créer un espace ombragé sur votre terrasse ou encore dans
                  votre jardin. Cette construction vous permet ainsi de profiter
                  plus longtemps de l’extérieur.
                </p>
                <p className="text-center gras">
                  Découvrez toute notre gamme de Pergolas bois.
                </p>
                <br></br>
                <div className="text-center">
                  <a className="btn-grad" href="/#/Devis">
                    Avoir son devis
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="reveal">
          <h1 className="text-center ssligne mt-3">Récents</h1>
          <ListBlog list={listArticles} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Pergolas;
