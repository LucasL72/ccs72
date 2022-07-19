import React from "react";
import MainLayout from "../layouts/MainLayout";
import FormContact from "../components/FormContact";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Events from "../components/Events";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";

const Contact = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);
  useEffect(() => {
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
        <div>
          <Container>
            <h1 className="text-center ssligne">
              Charpente Couverture de la Sarthe
            </h1>
            <div className="reveal">
              <Row>
                <Col md={6} className="d-flex justify-content-center mb-4 mt-4">
                  <img
                    alt="carport"
                    src="./image.webp"
                    className=" img-boder img-fluid d-flex justify-content-center scale rounded"
                  ></img>
                </Col>

                <Col md={6} className="mb-4 mt-4">
                  <p className="justif">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Feugiat scelerisque varius morbi enim nunc faucibus
                    a pellentesque sit. Volutpat ac tincidunt vitae semper.
                    Vitae semper quis lectus nulla at volutpat. Elit duis
                    tristique sollicitudin nibh sit amet commodo nulla facilisi.
                    In ornare quam viverra orci sagittis eu volutpat. Risus
                    nullam eget felis eget. Et netus et malesuada fames ac
                    turpis egestas. Egestas fringilla phasellus faucibus
                    scelerisque eleifend donec. Viverra orci sagittis eu
                    volutpat. Sed egestas egestas fringilla phasellus faucibus
                    scelerisque. Tempus egestas sed sed risus pretium. Mattis
                    nunc sed blandit libero. Euismod in pellentesque massa
                    placerat duis ultricies lacus sed. Scelerisque eu ultrices
                    vitae auctor. Massa placerat duis ultricies lacus sed
                    turpis. Elementum nibh tellus molestie nunc. Commodo sed
                    egestas egestas fringilla phasellus faucibus. Tristique
                    magna sit amet purus gravida quis blandit.
                  </p>
                  <Row>
                    <Col md={2} className="text-center mb-3">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.groupe-sma.fr/SGM/jcms/ji2_56854/fr/decouvrez-smabtp"
                      >
                        <img
                          src="./images/smabtp.webp"
                          alt="logo smabtp"
                          className="rounded-circle img-fluid"
                        ></img>
                      </a>
                    </Col>
                    <Col md={5} className="text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.orcab.coop/cooperatives/cobat"
                      >
                        <img
                          src="./images/cobat.jpg"
                          alt="logo cobat"
                          className="img-fluid"
                        ></img>
                      </a>
                    </Col>
                    <Col md={3} className="text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.artipole.fr/"
                      >
                        <img
                          src="./images/Artipole.webp"
                          alt="logo artipole"
                          className="img-fluid"
                        ></img>
                      </a>
                    </Col>
                    <Col md={2} className="text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.ffbatiment.fr/"
                      >
                        <img
                          src="./images/ffb.png"
                          alt="logo ffb"
                          className="img-fluid"
                        ></img>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="reveal">
          <Events list={listEvents} />
        </div>
        <div className="reveal">
          <FormContact />
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
