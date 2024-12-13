import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const SideTitle = () => {
  return (
    <InputGroup className="mb-3 ms-2">
      <InputGroup.Text id="basic-addon2" className="bg-secondary border-0 ">
        {" "}
        <i className="bi bi-search text-danger"></i>
      </InputGroup.Text>

      <Form.Control
        size="sm"
        placeholder="Search "
        aria-label="Search "
        aria-describedby="basic-addon2"
        className="bg-secondary border-0  "
      />
    </InputGroup>
  );
};
export default SideTitle;
