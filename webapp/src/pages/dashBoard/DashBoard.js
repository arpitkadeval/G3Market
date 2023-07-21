import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate, Link } from "react-router-dom";
import {
  dashUser,
  dashicon,
  dashicon2,
  dashicon3,
} from "../../comman/AllImages";
import "../../styles/DashBoard.css";
import CountUp from "react-countup";
import CommonProfileCard from "../../comman/CommonProfileCard";
import ArrowBounce from "../../comman/ArrowBounce";

const DashBoard = () => {
  const [purchasing, setPurchasing] = useState("current");

  const purchasingHandleChange = (item) => {
    setPurchasing(item);
  };
  return (
    <div>
      <>
        <Navbar />
        <ArrowBounce />
        <div className="hero-section style-2 pb-lg-400">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="">My Account</Link>
              </li>
              <li>
                <span>Dashboard</span>
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
                <div className="dashboard-widget mb-40">
                  <div className="dashboard-title mb-30">
                    <h5 className="title">My Activity</h5>
                  </div>
                  <div className="row justify-content-center mb-30-none">
                    <div className="col-md-4 col-sm-6">
                      <div className="dashboard-item">
                        <div className="thumb">
                          <img src={dashicon} alt="dashboard" />
                        </div>
                        <div className="content">
                          <h2 className="title">
                            <CountUp
                              className="counter"
                              duration={3}
                              redraw={true}
                              end={80}
                            ></CountUp>
                          </h2>
                          <h6 className="info">Active Bids</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="dashboard-item">
                        <div className="thumb">
                          <img src={dashicon2} alt="dashboard" />
                        </div>
                        <div className="content">
                          <h2 className="title">
                            <CountUp
                              className="counter"
                              duration={3}
                              redraw={true}
                              end={15}
                            ></CountUp>
                          </h2>
                          <h6 className="info">Items Won</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="dashboard-item">
                        <div className="thumb">
                          <img src={dashicon3} alt="dashboard" />
                        </div>
                        <div className="content">
                          <h2 className="title">
                            <CountUp
                              className="counter"
                              duration={3}
                              redraw={true}
                              end={115}
                            ></CountUp>
                          </h2>
                          <h6 className="info">Favorites</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <h5 className="title mb-10">Purchasing</h5>
                  <div className="dashboard-purchasing-tabs">
                    <ul className="nav-tabs nav">
                      <li onClick={() => purchasingHandleChange("current")}>
                        <Link
                        to=''
                          className={
                            purchasing === "current" ? "active" : "current"
                          }
                          data-toggle="tab"
                          style={{ cursor: "pointer" }}
                        >
                          Current
                        </Link>
                      </li>
                      <li onClick={() => purchasingHandleChange("pending")}>
                        <Link
                        to=''
                          className={
                            purchasing === "pending" ? "active" : "pending"
                          }
                          data-toggle="tab"
                          style={{ cursor: "pointer" }}
                        >
                          Pending
                        </Link>
                      </li>
                      <li onClick={() => purchasingHandleChange("history")}>
                        <Link 
                        to=''
                          className={
                            purchasing === "history" ? "active" : "history"
                          }
                          data-toggle="tab"
                          style={{ cursor: "pointer" }}
                        >
                          History
                        </Link>
                      </li>
                    </ul>

                    {purchasing === "current" ? (
                      <div className="tab-pane show active fade" id="current">
                        <table className="purchasing-table">
                          <thead>
                            <th>Item current</th>
                            <th>Bid Price</th>
                            <th>Highest Bid</th>
                            <th>Lowest Bid</th>
                            <th>Expires</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : purchasing === "pending" ? (
                      <div className="tab-pane show fade" id="pending">
                        <table className="purchasing-table">
                          <thead>
                            <th>Item pending</th>
                            <th>Bid Price</th>
                            <th>Highest Bid</th>
                            <th>Lowest Bid</th>
                            <th>Expires</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="tab-pane show fade" id="history">
                        <table className="purchasing-table">
                          <thead>
                            <th>Item history</th>
                            <th>Bid Price</th>
                            <th>Highest Bid</th>
                            <th>Lowest Bid</th>
                            <th>Expires</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                            <tr>
                              <td data-purchase="item">2018 Hyundai Sonata</td>
                              <td data-purchase="bid price">$1,775.00</td>
                              <td data-purchase="highest bid">$1,775.00</td>
                              <td data-purchase="lowest bid">$1,400.00</td>
                              <td data-purchase="expires">7/2/2021</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
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

export default DashBoard;
