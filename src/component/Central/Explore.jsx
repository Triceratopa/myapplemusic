import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Explore = () => {
  return (
    <div className="mt-3 ms-3">
      <h3>Altro da esplorare</h3>
      <Container>
        <Row className="text-danger">
          <Col>Esplora per genere</Col>
          <Col>Worldwide</Col>
          <Col>Video musicali</Col>
        </Row>
        <Row className="text-danger">
          <Col>Decenni</Col>
          <Col>Classifiche</Col>
          <Col>Nuovi artisti</Col>
        </Row>
        <Row className="text-danger">
          <Col>Attività e stati d'animo</Col>
          <Col>Audio spaziali</Col>
          <Col>Hit del passato</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Explore;
