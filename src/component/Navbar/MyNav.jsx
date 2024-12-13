import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import MyNavR from "./MyNavR";
import MyNavL from "./MyNavL";
import NavButton from "./NavButton";
import MyNavC from "./MyNavC";

const MyNav = () => {
  return (
    <Navbar className="bg-dark ">
      <Container>
        <Row className="flex-nowrap">
          <Col className="col-4">
            <MyNavR />
          </Col>
          <Col className="col-4">
            <MyNavC />
          </Col>
          <Col className="col-4">
            <MyNavL />
          </Col>
          <Col className="col-4">
            <NavButton />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default MyNav;
