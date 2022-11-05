import "./homepage.scss";
import React from "react";
import Directory from "../../components/directory/Directory";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/topics">Topics</Link>
      <Directory />
    </div>
  );
};

export default Homepage;
