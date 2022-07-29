import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import ModalDeletePic from "../../Modals/ModalDeletePic";
import Button from "react-bootstrap/Button";
import { urlImgAlbum } from "../../../utils/url";
import Col from "react-bootstrap/Col";
import jwt_decode from "jwt-decode";

const Photos = (props) => {
  const { item } = props;
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const CheckLogPics = () => {
    const userToken = localStorage.getItem("user_token");

    if (
      userToken === "visitor" ||
      (jwt_decode(userToken).isVerified === 1 &&
        jwt_decode(userToken).isAdmin === 0)
    )
      return (
        <>
          {" "}
          <ImageViewer>
            <img
              src={`${urlImgAlbum + item.photo}`}
              alt={item.alt}
              className="img-border  position-relative"
              width="100%"
            />
          </ImageViewer>
        </>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          {" "}
          <ImageViewer>
            <img
              src={`${urlImgAlbum + item.photo}`}
              alt={item.alt}
              className="img-border  position-relative"
              width="100%"
            />
          </ImageViewer>
          <div className="text-center">
            <Button
              variant="outline-danger"
              type="submit"
              onClick={() => setModalDelShow(true)}
            >
              Supprimer
            </Button>
            <ModalDeletePic
              show={modalDelShow}
              onHide={() => setModalDelShow(false)}
              item={item}
            />
          </div>
        </>
      );
  };
  return (
    <>
      <Col md={4} className="mb-3">
        <CheckLogPics />
      </Col>
    </>
  );
};
export default Photos;
