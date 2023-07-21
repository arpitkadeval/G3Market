import React from "react";
import "../styles/DashBoard.css";
import { dashUser } from "./AllImages";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authAction";

const CommonProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singOut = () => {
    localStorage.clear();
    deleteAllCookies();
    dispatch(logout());
    navigate("/");
  };

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=${new Date()}`;
    }
  }

  return (
    <div className="col-sm-10 col-md-7 col-lg-4">
      <div className="dashboard-widget mb-30 mb-lg-0 sticky-menu">
        <div className="user">
          <div className="thumb-area">
            <div className="thumb">
              <img src={dashUser} alt="user" />
            </div>
            <label for="profile-pic" className="profile-pic-edit">
              <i className="flaticon-pencil"></i>
            </label>
            <input type="file" id="profile-pic" className="d-none" />
          </div>
          <div className="content">
            <h5 className="title">
              <a href="#0">Percy Reed</a>
            </h5>
            <span className="username">john@gmail.com</span>
          </div>
        </div>
        <div className="dashboard-menu">
          <li>
            <Link to="/Dashboard">
              <i className="flaticon-dashboard"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="flaticon-settings"></i>Personal Profile{" "}
            </Link>
          </li>
          <li>
            <Link to="/mybids">
              <i className="flaticon-auction"></i>My Bids
            </Link>
          </li>
          <li>
            <Link to="/winning-bid">
              <i className="flaticon-best-seller"></i>Winning Bids
            </Link>
          </li>
          <li>
            <Link to="/alerts">
              <i className="flaticon-alarm"></i>My Alerts
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <i className="flaticon-star"></i>My Favorites
            </Link>
          </li>
          <li>
            <Link to="/referral">
              <i className="flaticon-shake-hand"></i>Referrals
            </Link>
          </li>
          <li>
            <button onClick={() => singOut()}>
              <i className="flaticon-left-arrow"></i>Logout
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default CommonProfileCard;
