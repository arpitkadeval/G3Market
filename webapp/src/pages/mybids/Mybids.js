import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/DashBoard.css";
import {
  dashUser,
  popular1,
  popular2,
  popular3,
  popular4,
  popular5,
  auction1,
  auction2,
  auction3,
} from "../../comman/AllImages.js";
import CommonProfileCard from "../../comman/CommonProfileCard";
import ArrowBounce from "../../comman/ArrowBounce";
import { Link } from "react-router-dom";

const Mybids = () => {
  const [tabBids, setTabBids] = useState("Upcoming");

  const myBidsChanges = (item) => {
    setTabBids(item);
  };
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
                <span>My Bids</span>
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
                <div className="dash-bid-item dashboard-widget mb-40-60">
                  <div className="header">
                    <h4 className="title">My Bids</h4>
                    <span className="notify">
                      <i className="flaticon-alarm"></i> Manage Notifications
                    </span>
                  </div>
                  <ul className="button-area nav nav-tabs">
                    <li onClick={() => myBidsChanges("Upcoming")}>
                      <Link
                      to=''
                        data-toggle="tab"
                        className={
                          tabBids === "Upcoming"
                            ? "custom-button active"
                            : "custom-button"
                        }
                      >
                        Upcoming
                      </Link>
                    </li>
                    <li onClick={() => myBidsChanges("Past")}>
                      <Link
                      to=''
                        data-toggle="tab"
                        className={
                          tabBids === "Past"
                            ? "custom-button active"
                            : "custom-button"
                        }
                      >
                        Past
                      </Link>
                    </li>
                  </ul>
                </div>
                {tabBids === "Upcoming" ? (
                  <div className="tab-pane fade show active" id="upcoming">
                    <div className="row mb-30-none justify-content-center">
                      <div className="col-sm-10 col-md-6">
                        <div className="auction-item-2">
                          <div className="auction-thumb">
                            <Link to="/product-details">
                              <img src={popular1} alt="car" />
                            </Link>
                            <Link to="" className="rating">
                              <i className="far fa-star"></i>
                            </Link>
                            <Link to="" className="bid">
                              <i className="flaticon-auction"></i>
                            </Link>
                          </div>
                          <div className="auction-content">
                            <h6 className="title">
                              <Link to="">2018 Hyundai Sonata</Link>
                            </h6>
                            <div className="bid-area">
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Current Bid</div>
                                  <div className="amount">$876.00</div>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Buy Now</div>
                                  <div className="amount">$5,00.00</div>
                                </div>
                              </div>
                            </div>
                            <div className="countdown-area">
                              <div className="countdown">
                                <div id="bid_counter26"></div>
                              </div>
                              <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                              <Link to="" className="custom-button">
                                Submit a bid
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6">
                        <div className="auction-item-2">
                          <div className="auction-thumb">
                            <Link to="/product-details">
                              <img src={popular2} alt="car" />
                            </Link>
                            <Link to="" className="rating">
                              <i className="far fa-star"></i>
                            </Link>
                            <Link to="" className="bid">
                              <i className="flaticon-auction"></i>
                            </Link>
                          </div>
                          <div className="auction-content">
                            <h6 className="title">
                              <Link to="">2018 Nissan Versa, S</Link>
                            </h6>
                            <div className="bid-area">
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Current Bid</div>
                                  <div className="amount">$876.00</div>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Buy Now</div>
                                  <div className="amount">$5,00.00</div>
                                </div>
                              </div>
                            </div>
                            <div className="countdown-area">
                              <div className="countdown">
                                <div id="bid_counter27"></div>
                              </div>
                              <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                              <Link to="" className="custom-button">
                                Submit a bid
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6">
                        <div className="auction-item-2">
                          <div className="auction-thumb">
                            <Link to="/product-details">
                              <img src={popular3} alt="product" />
                            </Link>
                            <Link to="" className="rating">
                              <i className="far fa-star"></i>
                            </Link>
                            <Link to="" className="bid">
                              <i className="flaticon-auction"></i>
                            </Link>
                          </div>
                          <div className="auction-content">
                            <h6 className="title">
                              <Link to="">2019 Mercedes-Benz C, 300</Link>
                            </h6>
                            <div className="bid-area">
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Current Bid</div>
                                  <div className="amount">$876.00</div>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Buy Now</div>
                                  <div className="amount">$5,00.00</div>
                                </div>
                              </div>
                            </div>
                            <div className="countdown-area">
                              <div className="countdown">
                                <div id="bid_counter1"></div>
                              </div>
                              <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                              <Link to="" className="custom-button">
                                Submit a bid
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-10 col-md-6">
                        <div className="auction-item-2">
                          <div className="auction-thumb">
                            <Link to="/product-details">
                              <img src={popular4} alt="product" />
                            </Link>
                            <Link to="" className="rating">
                              <i className="far fa-star"></i>
                            </Link>
                            <Link to="" className="bid">
                              <i className="flaticon-auction"></i>
                            </Link>
                          </div>
                          <div className="auction-content">
                            <h6 className="title">
                              <Link to="">2017 Harley-Davidson XG750,</Link>
                            </h6>
                            <div className="bid-area">
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Current Bid</div>
                                  <div className="amount">$876.00</div>
                                </div>
                              </div>
                              <div className="bid-amount">
                                <div className="icon">
                                  <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                  <div className="current">Buy Now</div>
                                  <div className="amount">$5,00.00</div>
                                </div>
                              </div>
                            </div>
                            <div className="countdown-area">
                              <div className="countdown">
                                <div id="bid_counter2"></div>
                              </div>
                              <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                              <Link to="" className="custom-button">
                                Submit a bid
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row justify-content-center mb-30-none">
                    <div className="col-sm-10 col-md-6">
                      <div className="auction-item-2">
                        <div className="auction-thumb">
                          <Link to="/product-details">
                            <img src={auction1} alt="jewelry" />
                          </Link>
                          <Link to="" className="rating">
                            <i className="far fa-star"></i>
                          </Link>
                          <Link to="" className="bid">
                            <i className="flaticon-auction"></i>
                          </Link>
                        </div>
                        <div className="auction-content">
                          <h6 className="title">
                            <Link to="/product-details">
                              Gold Ring With Clear Stones
                            </Link>
                          </h6>
                          <div className="bid-area">
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-auction"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Current Bid</div>
                                <div className="amount">$876.00</div>
                              </div>
                            </div>
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-money"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Buy Now</div>
                                <div className="amount">$5,00.00</div>
                              </div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter23"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                          <div className="text-center">
                            <Link to="" className="custom-button">
                              Submit a bid
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 col-md-6">
                      <div className="auction-item-2">
                        <div className="auction-thumb">
                          <Link to="/product-details">
                            <img src={auction2} alt="jewelry" />
                          </Link>
                          <Link to="" className="rating">
                            <i className="far fa-star"></i>
                          </Link>
                          <Link to="" className="bid">
                            <i className="flaticon-auction"></i>
                          </Link>
                        </div>
                        <div className="auction-content">
                          <h6 className="title">
                            <Link to="/product-details">
                              Ring With Clear Stone Accents
                            </Link>
                          </h6>
                          <div className="bid-area">
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-auction"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Current Bid</div>
                                <div className="amount">$876.00</div>
                              </div>
                            </div>
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-money"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Buy Now</div>
                                <div className="amount">$5,00.00</div>
                              </div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter24"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                          <div className="text-center">
                            <Link to="" className="custom-button">
                              Submit a bid
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 col-md-6">
                      <div className="auction-item-2">
                        <div className="auction-thumb">
                          <Link to="/product-details">
                            <img src={auction3} alt="jewelry" />
                          </Link>
                          <Link to="" className="rating">
                            <i className="far fa-star"></i>
                          </Link>
                          <Link to="" className="bid">
                            <i className="flaticon-auction"></i>
                          </Link>
                        </div>
                        <div className="auction-content">
                          <h6 className="title">
                            <Link to="/product-details">
                              Gold Ring With Clear Stones
                            </Link>
                          </h6>
                          <div className="bid-area">
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-auction"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Current Bid</div>
                                <div className="amount">$876.00</div>
                              </div>
                            </div>
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-money"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Buy Now</div>
                                <div className="amount">$5,00.00</div>
                              </div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter25"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                          <div className="text-center">
                            <Link to="" className="custom-button">
                              Submit a bid
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 col-md-6">
                      <div className="auction-item-2">
                        <div className="auction-thumb">
                          <Link to="/product-details">
                            <img src={popular5} alt="jewelry" />
                          </Link>
                          <Link to="" className="rating">
                            <i className="far fa-star"></i>
                          </Link>
                          <Link to="" className="bid">
                            <i className="flaticon-auction"></i>
                          </Link>
                        </div>
                        <div className="auction-content">
                          <h6 className="title">
                            <Link to="/product-details">
                              Gold Ring With Clear Stones
                            </Link>
                          </h6>
                          <div className="bid-area">
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-auction"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Current Bid</div>
                                <div className="amount">$876.00</div>
                              </div>
                            </div>
                            <div className="bid-amount">
                              <div className="icon">
                                <i className="flaticon-money"></i>
                              </div>
                              <div className="amount-content">
                                <div className="current">Buy Now</div>
                                <div className="amount">$5,00.00</div>
                              </div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter30"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                          <div className="text-center">
                            <Link to="" className="custom-button">
                              Submit a bid
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  //   </div>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default Mybids;
