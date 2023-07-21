import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CommonProfileCard from "../../comman/CommonProfileCard";
import "../../styles/DashBoard.css";
import { useNavigate, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import ArrowBounce from "../../comman/ArrowBounce";

const Profile = () => {
  return (
    <div>
      <>
        <Navbar />
        <ArrowBounce />
        <div className="hero-section style-2">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="">My Account</Link>
              </li>
              <li>
                <span>Personal profile</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
          <div className="container">
            <div className="row justify-content-center">
              <CommonProfileCard />
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                      <div className="header">
                        <h4 className="title">Personal Details</h4>
                        <span className="edit">
                          <i className="flaticon-edit"></i> Edit
                        </span>
                      </div>
                      <ul className="dash-pro-body">
                        <li>
                          <div className="info-name">Name</div>
                          <div className="info-value">Albert Owens</div>
                        </li>
                        <li>
                          <div className="info-name">Date of Birth</div>
                          <div className="info-value"> 15-03-1974</div>
                        </li>
                        <li>
                          <div className="info-name">Address</div>
                          <div className="info-value">
                            8198 Fieldstone Dr.La Crosse, WI 54601
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                      <div className="header">
                        <h4 className="title">Account Settings</h4>
                        <span className="edit">
                          <i className="flaticon-edit"></i> Edit
                        </span>
                      </div>
                      <ul className="dash-pro-body">
                        <li>
                          <div className="info-name">Language</div>
                          <div className="info-value">
                            English (United States)
                          </div>
                        </li>
                        <li>
                          <div className="info-name">Time Zone</div>
                          <div className="info-value">
                            (GMT-06:00) Central America
                          </div>
                        </li>
                        <li>
                          <div className="info-name">Status</div>
                          <div className="info-value">
                            <i className="flaticon-check text-success"></i>{" "}
                            "Active"
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                      <div className="header">
                        <h4 className="title">Email Address</h4>
                        <span className="edit">
                          <i className="flaticon-edit"></i> Edit
                        </span>
                      </div>
                      <ul className="dash-pro-body">
                        <li>
                          <div className="info-name">Email</div>
                          <div className="info-value">albert349@gmail.com</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="dash-pro-item mb-30 dashboard-widget">
                      <div className="header">
                        <h4 className="title">Phone</h4>
                        <span className="edit">
                          <i className="flaticon-edit"></i> Edit
                        </span>
                      </div>
                      <ul className="dash-pro-body">
                        <li>
                          <div className="info-name">Mobile</div>
                          <div className="info-value">+1 234-567-8925</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="dash-pro-item dashboard-widget">
                      <div className="header">
                        <h4 className="title">Security</h4>
                        <span className="edit">
                          <i className="flaticon-edit"></i> Edit
                        </span>
                      </div>
                      <ul className="dash-pro-body">
                        <li>
                          <div className="info-name">Password</div>
                          <div className="info-value">xxxxxxxxxxxxxxxx</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};
export default Profile;
