import React from "react";
import { Navbar } from "react-bootstrap";
import MyNav from "./MyNav";

const MyNavR = () => {
  return (
    <Navbar.Brand href="#home" className="g-5">
      <i className="bi bi-shuffle text-secondary me-3"></i>
      <i className="bi bi-play-fill text-secondary me-3"></i>
      <i className="bi bi-repeat text-secondary me-3"></i>
    </Navbar.Brand>
  );
};
export default MyNavR;
