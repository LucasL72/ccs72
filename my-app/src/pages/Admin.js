import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Blog from "../components/Blog";
import Album from "../components/Album";
import Events from "../components/Events";
import GestEvent from "../components/Admin/GestEvent";
import GestMess from "../components/Admin/GestMess";
import GestBlog from "../components/Admin/GestBlog";
import GestPhotos from "../components/Admin/GestPhotos";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <Container fluid>
          <h1 className="text-center ssligne">Partie administration</h1>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Gestion des actualités</Accordion.Header>
              <Accordion.Body>
                <GestBlog />
                <Blog />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Gestion des Photos</Accordion.Header>
              <Accordion.Body>
                <GestPhotos />
                <Album />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Gestion evènements</Accordion.Header>
              <Accordion.Body>
                <Events /> <GestEvent />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Gestion des messages </Accordion.Header>
              <Accordion.Body>
                <GestMess />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Admin;
