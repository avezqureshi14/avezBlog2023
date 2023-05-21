import React from "react";
import Cards from "../components/Cards";
import AuthorCard from "../components/AuthorCard";

const Home = () => {
  return (
    <>
      <div className="homeMainContainer">
        <div className="mainContainer">
        <Cards />
        <AuthorCard />
        </div>
      </div>
    </>
  );
};

export default Home;
