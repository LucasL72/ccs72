import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Blog from "../../components/Blog";

const Velux = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <h1 className="text-center ssligne">Velux</h1>
          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="carport"
                src="./image.webp"
                className=" img-boder img-fluid d-flex justify-content-center"
              ></img>
            </Col>

            <Col md={6}>
              <p className="justif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque sit. Volutpat ac tincidunt vitae semper. Vitae
                semper quis lectus nulla at volutpat. Elit duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi. In ornare
                quam viverra orci sagittis eu volutpat. Risus nullam eget felis
                eget. Et netus et malesuada fames ac turpis egestas. Egestas
                fringilla phasellus faucibus scelerisque eleifend donec. Viverra
                orci sagittis eu volutpat. Sed egestas egestas fringilla
                phasellus faucibus scelerisque. Tempus egestas sed sed risus
                pretium. Mattis nunc sed blandit libero. Euismod in pellentesque
                massa placerat duis ultricies lacus sed. Scelerisque eu ultrices
                vitae auctor. Massa placerat duis ultricies lacus sed turpis.
                Elementum nibh tellus molestie nunc. Commodo sed egestas egestas
                fringilla phasellus faucibus. Tristique magna sit amet purus
                gravida quis blandit.
              </p>
            </Col>
          </Row>
        </Container>
        <Blog />
      </MainLayout>
    </div>
  );
};

export default Velux;
