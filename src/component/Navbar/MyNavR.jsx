import React from "react";
import { Navbar } from "react-bootstrap";
import MyNav from "./MyNav";

const MyNavR = () => {
  return (
    <Navbar.Brand href="#home">
      <i className="bi bi-shuffle text-secondary"></i>
      <i className="bi bi-play-fill text-secondary"></i>
      <i className="bi bi-repeat text-secondary"></i>
    </Navbar.Brand>
  );
};
export default MyNavR;
