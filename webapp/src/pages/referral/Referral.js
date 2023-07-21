import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/DashBoard.css";
import CommonProfileCard from "../../comman/CommonProfileCard";
import ArrowBounce from "../../comman/ArrowBounce";
import { Link } from "react-router-dom";

const Referral = () => {
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
                <span>Referrals</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
          <div className="container">
            <div className="row justify-content-center">
              <CommonProfileCard />
              <div className="col-lg-8">
                <div className="dashboard-widget mb-30">
                  <h4 className="title mt-0 mb-20">
                    Welcome to the Sbidu Referral program.
                  </h4>
                  <p>
                    Have friends sign up using your unique link and earn
                    rewards.
                  </p>
                </div>
                <div className="dashboard-widget mb-30">
                  <h5 className="title mt-0 mb-20">
                    Share your unique referral link
                  </h5>
                  <form action="#0" className="referral-form mb-30">
                    <input
                      type="text"
                      value="https://Sbidu.com?grsf=y4wyd8"
                      readonly
                    />
                    <button type="submit" className="custom-button">
                      Copy Link
                    </button>
                  </form>
                  <div className="share-area">
                    <div className="left">Share :</div>
                    <ul className="social-icons">
                      <li>
                        <Link to="" className="active">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dashboard-widget mb-30">
                  <h5 className="title mt-0 mb-30">Promotions & Rewards</h5>
                  <p className="mb-3 mb-md-4">
                    Give $5 off to a friend and get $5 credit after they make a
                    purchase
                  </p>
                  <Link to="" className="custom-button pink">
                    <i className="flaticon-trophy"></i> 1 Referrals Required
                  </Link>
                </div>
                <div className="dashboard-widget mb-30">
                  <h5 className="title mt-0 mb-20">Leaderboard</h5>
                  <table className="referral-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Sbidu Bidder</th>
                        <th>Referrals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="rank">#01</td>
                        <td data-label="Sbidu bidder">jo*@m**********</td>
                        <td data-label="referrals">01</td>
                      </tr>
                      <tr>
                        <td data-label="rank">#02</td>
                        <td data-label="Sbidu bidder">
                          ma****************@y********
                        </td>
                        <td data-label="referrals">01</td>
                      </tr>
                      <tr>
                        <td data-label="rank">#03</td>
                        <td data-label="Sbidu bidder">ho********@y********</td>
                        <td data-label="referrals">00</td>
                      </tr>
                      <tr>
                        <td data-label="rank">#04</td>
                        <td data-label="Sbidu bidder">
                          ma****************@y********
                        </td>
                        <td data-label="referrals">00</td>
                      </tr>
                      <tr>
                        <td data-label="rank">#05</td>
                        <td data-label="Sbidu bidder">ru*@f**********</td>
                        <td data-label="referrals">00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="dashboard-widget">
                  <h5 className="title mt-0 mb-30">Your Stats</h5>
                  <h3 className="stats">
                    08<span>Referrals Made</span>
                  </h3>
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

export default Referral;
