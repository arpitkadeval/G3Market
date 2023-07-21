import React from "react";
import { Link } from "react-router-dom";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <>
      <div className="overlayer" id="overlayer">
        <div className="loader">
          <div className="loader-inner"></div>
        </div>
      </div>
      <Link to=""className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </Link>
      <div className="overlay"></div>
    </>
  );
};

export default Loader;
