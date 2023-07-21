import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../api/config";

const SocialLogin = () => {
    
  const socialLogin = (type) => {
    if (type === "google") {
      window.open(API_URL.auth.google, "_self");
    } else {
      window.open(API_URL.auth.facebook, "_self");
    }
  };
  return (
    <>
      
      <ul className="login-with">
        <li onClick={() => socialLogin("facebook")}>
          <Link to=''>
            <i className="fab fa-facebook"></i>Log in with Facebook
          </Link>
        </li>
        <li onClick={() => socialLogin("google")}>
          <Link to=''>
            <i className="fab fa-google-plus"></i>Log in with Google
          </Link>
        </li>
      </ul>
      <div className="or">
        <span>Or</span>
      </div>
    </>
  );
};

export default SocialLogin;