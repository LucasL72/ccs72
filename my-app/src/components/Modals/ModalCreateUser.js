import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createUser} from "../../store/actions/UsersActions";


const ModalCreateUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    if (email && password === confirm) {
      dispatch(createUser({email,password,confirm}));
      setEmail("");
      setPassword("");
      setConfirm("");
      window.alert("Compte créé !");
    }
  };

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
              <Form onSubmit={(e) => handleForm(e)}>
                <Col md={12}>
                  {" "}
                  <FloatingLabel controlId="floatingInput" label="Votre Email">
                    <Form.Control
                      type="email"
                      placeholder="Votre Email"
                      value={email}
                      maxlenght={50}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Row>
                  <Col md={6} className="mt-2">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Mot de Passe"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Votre Mot de Passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6} className="mt-2">
                    <FloatingLabel
                      controlId="floatingInput"
                      label=" Confirmer Mot de Passe"
                      className="mb-3"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Confirmer Mot de Passe"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Col md={12} className="text-center">
                  {" "}
                  <Button
                    variant="success"
                    type="submit"
                    onClick={props.onHide}
                  >
                    Créer
                  </Button>{" "}
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

export default ModalCreateUser;
