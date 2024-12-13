import React from "react";
import { Button, Navbar } from "react-bootstrap";

const NavButton = () => {
  return (
    <Navbar.Brand href="#home">
      <Button variant="danger">
        <i className="bi bi-person-heart"></i>Aggiungi
      </Button>
    </Navbar.Brand>
  );
};
export default NavButton;
