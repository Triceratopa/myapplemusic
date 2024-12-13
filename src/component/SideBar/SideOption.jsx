import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SideOption = () => {
  return (
    <Container>
      <Row>
        <Col>
          <i class="bi bi-house-door text-danger">
            <p className="text-white">Home</p>
          </i>
          <i class="bi bi-grid text-danger">
            <p className="text-white">Novità</p>
          </i>
          <i class="bi bi-broadcast text-danger">
            <p className="text-white">Radio</p>
          </i>
        </Col>
      </Row>
    </Container>
  );
};
export default SideOption;
