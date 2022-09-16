import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Velux = () => {
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
          <h1 className="text-center ssligne">Velux</h1>
          <div className="reveal">
            <Row>
              <Col md={6} className="d-flex justify-content-center">
                <img
                  alt="carport"
                  src="./images/9.webp"
                  className=" img-border img-fluid d-flex justify-content-center"
                ></img>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <img
                  alt="carport"
                  src="./images/velux2.webp"
                  className=" img-border img-fluid d-flex justify-content-center"
                ></img>
              </Col>
              <Col md={12} className="mt-3">
                <p className="text-center">Photos intérieur et extérieur de velux posé chez un particulier.</p>
                <p className="text-center gras">
                  Découvrez toute notre gamme de Velux.
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
          <br></br>
        </Container>
        <div className="reveal">
          <h1 className="text-center ssligne mt-2">Récents</h1>
          <ListBlog list={listArticles} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Velux;
