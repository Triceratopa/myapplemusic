import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeadCentral = () => {
  return (
    <Container className="mb-4 ms-4 mt-3">
      <h2 className="text-white ">Novità</h2>
      <hr />

      <Row className="flex-nowrap">
        <Col>
          <div>
            <p className="text-white">NUOVA STAZIONE RADIO</p>
            <p className="fs-6 text-white">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </p>
          </div>
          <img
            src="src/assets/images/1a.png"
            alt="chill"
            className="img-fluid"
            style={{ width: "400px", height: "250px" }}
          />
        </Col>
        <Col>
          <div>
            <p className="text-white">NUOVA STAZIONE RADIO</p>
            <p className="text-white">Ecco la nuova casa della musica latina</p>
          </div>
          <img
            src="src/assets/images/1b.png"
            alt="latina"
            className="img-fluid"
            style={{ width: "400px", height: "250px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default HeadCentral;
