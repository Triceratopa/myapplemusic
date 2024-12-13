import React from "react";
import HeadCentral from "./HeadCentral";
import NewRelease from "./NewRelease";
import FetchC from "./FetchC";
import Explore from "./Explore";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column bg-black">
      <HeadCentral />
      <NewRelease />
      <FetchC />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
