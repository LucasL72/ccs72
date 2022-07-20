import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Events from "../components/Events";
import GestEvent from "../components/Admin/Events/GestEvent";
import GestMess from "../components/Admin/Mess/GestMess";
import GestBlog from "../components/Admin/Blog/GestBlog";
import GestPhotos from "../components/Admin/Photos/GestPhotos";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../store/actions/MessActions";
import { getEvent } from "../store/actions/EventActions";
import { getArticles } from "../store/actions/ArticlesActions";
import { getPic } from "../store/actions/PicsActions";

const Admin = () => {
  const dispatch = useDispatch();
  const listMessages = useSelector((state) => state.messages.listMessages);
  const listEvents = useSelector((state) => state.events.listEvents);
  const listArticles = useSelector((state) => state.articles.listArticles);
  const listPics = useSelector((state) => state.pics.listPics);
  useEffect(() => {
    dispatch(getArticles());
    dispatch(getPic());
    dispatch(getMessage());
    dispatch(getEvent());
  }, []);
  return (
    <div>
      <AdminLayout>
        <Container fluid>
          <h1 className="text-center ssligne">Partie administration</h1>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Gestion des actualités</Accordion.Header>
              <Accordion.Body>
                <GestBlog list={listArticles} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Gestion des Photos</Accordion.Header>
              <Accordion.Body>
                <GestPhotos list={listPics} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Gestion evènements</Accordion.Header>
              <Accordion.Body>
                <Events list={listEvents} /> <GestEvent list={listEvents} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Gestion des messages </Accordion.Header>
              <Accordion.Body>
                <GestMess list={listMessages} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </AdminLayout>
    </div>
  );
};

export default Admin;
