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
                <p className="justif">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque sit. Volutpat ac tincidunt vitae semper. Vitae
                  semper quis lectus nulla at volutpat. Elit duis tristique
                  sollicitudin nibh sit amet commodo nulla facilisi. In ornare
                  quam viverra orci sagittis eu volutpat. Risus nullam eget
                  felis eget. Et netus et malesuada fames ac turpis egestas.
                  Egestas fringilla phasellus faucibus scelerisque eleifend
                  donec. Viverra orci sagittis eu volutpat. Sed egestas egestas
                  fringilla phasellus faucibus scelerisque. Tempus egestas sed
                  sed risus pretium. Mattis nunc sed blandit libero. Euismod in
                  pellentesque massa placerat duis ultricies lacus sed.
                  Scelerisque eu ultrices vitae auctor. Massa placerat duis
                  ultricies lacus sed turpis. Elementum nibh tellus molestie
                  nunc. Commodo sed egestas egestas fringilla phasellus
                  faucibus. Tristique magna sit amet purus gravida quis blandit.
                </p>
              </Col>
            </Row>
          </div>
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
