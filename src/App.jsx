import "./App.css";
import MyNav from "./component/Navbar/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Header } from "react";
import SideBar from "./component/SideBar/SideBar";
import Home from "./component/Central/Home";

const App = () => {
  return (
    <div className="container p-0 m-0 ">
      <div className="row flex-nowrap">
        <div className="col-md-4 col-lg-3 bg-dark">
          <SideBar />
        </div>
        <div className="col-md-8 col-lg-9 p-0 ">
          <MyNav />
          <Home />
        </div>
      </div>
    </div>
  );
};
export default App;
