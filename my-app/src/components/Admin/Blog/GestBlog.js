import Button from "react-bootstrap/Button";
import React from "react";
import ModalCreateArt from "../../Modals/ModalCreateArt";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../../../store/actions/ArticlesActions";
import ListBlog from "./ListBlog";

const GestBlog = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);

  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <>
      <Container>
        <Col md={12}>
          <div className="text-center">
            <Button
              type="button"
              className="mt-3"
              onClick={() => setModalCreateShow(true)}
            >
              Créer Article
            </Button>
          </div>
        </Col>
      </Container>

      <ModalCreateArt
        show={modalCreateShow}
        onHide={() => setModalCreateShow(false)}
      />
      <ListBlog  list={listArticles} />
    </>
  );
};

export default GestBlog;
