import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeadCentral = () => {
  return (
    <Container>
      <h2>Novità</h2>
      <hr />

      <Row className="flex-nowrap">
        <Col>
          <div>
            <p>NUOVA STAZIONE RADIO</p>
            <p className="fs-6">
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
            <p>NUOVA STAZIONE RADIO</p>
            <p>Ecco la nuova casa della musica latina</p>
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
