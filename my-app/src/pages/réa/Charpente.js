import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Charpente = () => {
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
          <h1 className="text-center ssligne">
            Charpente / Couverture / Zinguerie
          </h1>
          <div className="reveal">
            <Row>
              <Col md={6} className="d-flex justify-content-center">
                <img
                  alt="carport"
                  src="./image.webp"
                  className=" img-border img-fluid d-flex justify-content-center"
                ></img>
              </Col>

              <Col md={6}>
                <p className="justif">
                  <b className="gras">Notre métier de charpentier bois :</b>{" "}
                  Nous intervenons sur les charpentes traditionnelles et/ou
                  fermette, pour des réparations, renforcement, surélévations,
                  création de lucarnes, transformation de surface de combles non
                  aménagés en combles aménageables, etc... <br></br>
                  <b className="gras">Notre métier de couvreur :</b> Que vous
                  ayez une couverture en ardoise, tuiles plate, tuiles
                  mécaniques, toiture zinc, ou encore toit plat, nous pouvons
                  vous accompagner pour sa réalisation. Entretien: Nous pouvons
                  réaliser le démoussage de votre toiture et effectuer diverses
                  réparations. Vous pouvez nous confiez la pose de femêtre de
                  toit (velux).
                  <br></br> <b className="gras">Notre métier de zingueur :</b>{" "}
                  Pour la réalisation ou l'entretien de vos gouttières,
                  cheneaux, lucarne, etc...
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="reveal">
          <h1 className="text-center ssligne mt-5">Récents</h1>
          <ListBlog list={listArticles} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Charpente;
