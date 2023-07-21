import React from "react";
import "../../styles/DashBoard.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  dashUser,
  product7,
  product8,
  product4,
  auction3,
} from "../../comman/AllImages.js";
import CommonProfileCard from "../../comman/CommonProfileCard";
import ArrowBounce from "../../comman/ArrowBounce";
import { Link } from "react-router-dom";

const WinningBid = () => {
  return (
    <div>
      <>
        <Navbar />
        <ArrowBounce />
        <div className="hero-section style-2">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to="">Pages</Link>
              </li>
              <li>
                <span>winning Bids</span>
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
                    <h4 className="title">Winning Bids</h4>
                  </div>
                  <div className="button-area justify-content-between">
                    <form className="product-search dashSerch">
                      <input type="text" placeholder="Item Name" />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                    <div className="sort-winning-bid">
                      <div className="item">Sort By : </div>
                      <select name="sort-by" className="select-bar">
                        <option value="all">All</option>
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                        <option value="type">Type</option>
                        <option value="car">Car</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-30-none justify-content-center">
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <Link to="/product-details">
                          <img src={auction3} alt="car" />
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
                          <img src={product4} alt="car" />
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
                          <img src={product7} alt="product" />
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
                          <img src={product8} alt="product" />
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
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default WinningBid;
