import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ModalCreateUser from "../Modals/ModalCreateUser";
const ModalCon = (props) => {
  /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    // ici la fonction est asynchrone
    const handleForm = async (e) => {
      e.preventDefault();
      if (email && password) {
        await dispatch(login({ email, password }));
        setEmail("");
        setPassword("");
        dispatch(check());
        navigate("/Profil");
      }
    };*/
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalConn" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalConn">
            Se Connecter/ Créer un compte {""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form>
                <Col md={12}>
                  {" "}
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      placeholder="Votre Email"
                      //value={email}
                      //onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-2">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Mot de Passe"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Votre Mot de Passe"
                      //value={password}
                      //onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  {" "}
                  <Button
                    variant="success"
                    type="submit"
                    onClick={props.onHide}
                  >
                    Se Connecter
                  </Button>{" "}
                  <Button
                    variant="outline-success"
                    onClick={() => setModalCreateShow(true)}
                  >
                    Créer un compte
                  </Button>{" "}
                  <ModalCreateUser
                    show={modalCreateShow}
                    onHide={() => setModalCreateShow(false)}
                  />
                </Col>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCon;
