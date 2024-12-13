import React from "react";
import { Navbar, Form } from "react-bootstrap";
const MyNavL = () => {
  return (
    <Navbar.Brand href="#home">
      <Form.Range
        className="text-secondary range-small ms-5"
        style={{
          width: "50px",
          height: "15px",
        }}
      />
    </Navbar.Brand>
  );
};
export default MyNavL;
