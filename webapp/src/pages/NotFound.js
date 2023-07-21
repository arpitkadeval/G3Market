import React from "react";
import{
  error,
} from "../comman/AllImages";
import { useNavigate, Link } from "react-router-dom";
import "../styles/NotFound.css";
const NotFound = () => {
  return<div>
    <>
    <div className="error-section padding-top padding-bottom bg_img" data-background="./assets/images/error-bg.png">
        <div className="container">
            <div className="error-wrapper">
                <div className="error-thumb">
                    <img src={error} alt="error" />
                </div>
                <h4 className="title">Return to the <Link to="/">Homepage</Link></h4>
            </div>
        </div>
    </div>
    </>
  </div>;
};

export default NotFound;
