import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import MyNavR from "./MyNavR";
import MyNavL from "./MyNavL";
import NavButton from "./NavButton";
import MyNavC from "./MyNavC";

const MyNav = () => {
  return (
    <Navbar className="bg-dark justify-content-center ">
      <Container className="">
        <Row className="flex-nowrap  ">
          <Col className="col-4 ms-5 mt-2">
            <MyNavR />
          </Col>
          <Col className="col-4 bg-secondary ">
            <MyNavC />
          </Col>
          <Col className="col-4 ms-5 mt-2">
            <MyNavL />
          </Col>
          <Col className="col-4 ms-4 ">
            <NavButton />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default MyNav;
