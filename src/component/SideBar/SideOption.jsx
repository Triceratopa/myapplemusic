import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SideOption = () => {
  return (
    <Container>
      <Row className="flex-column ms-3">
        <Col className="d-flex flex-nowrap ">
          <i class="bi bi-house-door text-danger"></i>
          <p className="text-white">Home</p>
        </Col>
        <Col className="d-flex flex-nowrap ">
          <i class="bi bi-grid text-danger"></i>
          <p className="text-white">Novità</p>
        </Col>
        <Col className="d-flex flex-nowrap ">
          <i class="bi bi-broadcast text-danger"></i>
          <p className="text-white">Radio</p>
        </Col>
      </Row>
    </Container>
  );
};
export default SideOption;
