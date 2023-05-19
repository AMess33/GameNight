import React, { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homepage">
      <h2 className="homeSubHeader">
        Welcome to <span className="siteName">GameNight</span>
      </h2>
      <p className="firstParagraph">
        Your one-stop shop for tracking your party's ongoing game nights!
      </p>
      <p className="lastParagraph">
        Create a game night, fill it with games, track scores, and more!
      </p>
      <Link className="getStartedBtn" to="/login">
        Get Started
      </Link>
    </div>
  );
};
export default Home;
