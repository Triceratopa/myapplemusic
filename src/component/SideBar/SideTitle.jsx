import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const SideTitle = () => {
  return (
    <InputGroup className="mb-3">
      <i className="bi bi-search text-danger"></i>
      <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        className="bg-secondary"
      />
    </InputGroup>
  );
};
export default SideTitle;
