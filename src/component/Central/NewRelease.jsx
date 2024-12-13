import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NewRelease = () => {
  return (
    <Container className="container-fluid ms-4 gap-2">
      <h2 className="fs-5 text-white">
        Nuovi episodi radio <i className="bi bi-chevron-right"></i>
      </h2>
      <Row className="flex-nowrap pb-0">
        <Col>
          <img
            src="src/assets/images/2a.png"
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <p className="text-white">Pròlogo con Abuelo</p>
        </Col>
        <Col>
          <img
            src="src/assets/images/2b.png"
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <p className="text-white">The Wanderer</p>
        </Col>
        <Col>
          <img
            src="src/assets/images/2c.png"
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <p className="text-white">Michael Bublè & Carly Pearce</p>
        </Col>
        <Col>
          <img
            src="src/assets/images/2d.png"
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <p className="text-white">Stephan Moccio: The Zane Lowe Interview</p>
        </Col>
        <Col>
          <img
            src="src/assets/images/2e.png"
            alt=""
            style={{ width: "150px", height: "150px" }}
          />
          <p className="text-white">Chart Spotlight: Julia Michaels</p>
        </Col>
      </Row>
    </Container>
  );
};
export default NewRelease;
