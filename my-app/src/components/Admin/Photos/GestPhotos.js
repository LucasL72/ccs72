import Button from "react-bootstrap/Button";
import React from "react";
import ModalCreatePic from "../../Modals/ModalCreatePic";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { getPic } from "../../../store/actions/PicsActions";
import Album from "./Album";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const GestPhotos = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  const dispatch = useDispatch();
  const listPics = useSelector((state) => state.pics.listPics);

  useEffect(() => {
    dispatch(getPic());
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
              Ajouter une Photo
            </Button>
          </div>
        </Col>
        </Container>
        <Album list={listPics} />
      <ModalCreatePic
        show={modalCreateShow}
        onHide={() => setModalCreateShow(false)}
      />
    </>
  );
};

export default GestPhotos;
