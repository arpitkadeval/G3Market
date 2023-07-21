import React, { useState } from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import Card from "../../comman/Card";
import {
  jauction1,
  jauction2,
  jauction3,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
} from "../../comman/AllImages.js";
import ArrowBounce from "../../comman/ArrowBounce";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

function Product2() {
  const [reng, setReng] = useState(["$0", "$10000"]);
  const rengset = (value) => {
    setReng(["$" + value[0] + "", "$" + value[1] + ""]);
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
                <Link to="">Pages</Link>
              </li>
              <li>
                <span> Jewelry</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="featured-auction-section padding-bottom mt--240 mt-lg--440 pos-rel">
          <div className="container">
            <div className="section-header cl-white mw-100 left-style">
              <h3 className="title">Bid on These Featured Auctions!</h3>
            </div>
            <div className="row justify-content-center mb-30-none">
            <Card
              imgsrc={jauction1}
              title={"Gold Ring With Clear Stones"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={jauction2}
              title={"Ring With Clear Stone Accents"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={jauction3}
              title={"Gold Ring With Clear Stones"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
     
            </div>
          </div>
        </section>
        <div className="product-auction padding-bottom">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-4 mb-50">
                <div className="widget">
                  <h5 className="title">Filter by Price</h5>
                  <div className="widget-body">
                    <Slider
                      id="slider-range"
                      min={0}
                      max={10000}
                      onChange={rengset}
                      range
                      allowCross={false}
                      defaultValue={[0, 10000]}
                    ></Slider>

                    <div></div>
                    <div className="price-range">
                      <label for="amount">Price :</label>
                      <input
                        type="text"
                        value={reng}
                        id="amount"
                        readonly
                        disabled
                      />
                    </div>
                  </div>
                  <div className="text-center mt-20">
                    <Link to="" className="custom-button">
                      Filter
                    </Link>
                  </div>
                </div>
                <div className="widget">
                  <h5 className="title">Auction Type</h5>
                  <div className="widget-body">
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="check1" />
                      <label for="check1">Live Auction</label>
                    </div>
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="check2" />
                      <label for="check2">Timed Auction</label>
                    </div>
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="check3" />
                      <label for="check3">Buy Now</label>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h5 className="title">Ending Within</h5>
                  <div className="widget-body">
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="day" />
                      <label for="day">1 Day</label>
                    </div>
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="week" />
                      <label for="week">1 Week</label>
                    </div>
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="month1" />
                      <label for="month1">1 Month</label>
                    </div>
                    <div className="widget-form-group">
                      <input type="checkbox" name="check-by-type" id="month3" />
                      <label for="month3">3 Month</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mb-50">
                <div className="product-header mb-40 style-2">
                  <div className="product-header-item">
                    <div className="item">Sort By : </div>
                    <select name="sort-by" className="select-bar">
                      <option value="all">All</option>
                      <option value="name">Name</option>
                      <option value="date">Date</option>
                      <option value="type">Type</option>
                      <option value="car">Car</option>
                    </select>
                  </div>
                  <div className="product-header-item">
                    <div className="item">Show : </div>
                    <select name="sort-by" className="select-bar">
                      <option value="09">06</option>
                      <option value="21">09</option>
                      <option value="30">30</option>
                      <option value="39">39</option>
                      <option value="60">60</option>
                    </select>
                  </div>
                  <form className="product-search ml-auto">
                    <input type="text" placeholder="Item Name" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="row mb-30-none justify-content-center">
                  <div className="col-sm-10 col-md-6">
                    <div className="auction-item-2">
                      <div className="auction-thumb">
                        <Link to="/product-details">
                          <img src={product10} alt="product" />
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
                          <Link to="">Juste un Clou ring</Link>
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
                            <div id="bid_counter10"></div>
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
                          <img src={product11} alt="product" />
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
                          <Link to="">Love Ring SM</Link>
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
                            <div id="bid_counter12"></div>
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
                          <img src={product12} alt="product" />
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
                          <Link to="">Gold & Diamond Bracelet</Link>
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
                            <div id="bid_counter13"></div>
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
                          <img src={product13} alt="product" />
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
                          <Link to="">Heart Cluster Cuff</Link>
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
                            <div id="bid_counter14"></div>
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
                          <img src={product14} alt="product" />
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
                          <Link to="">Rolled Diamond Edges</Link>
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
                            <div id="bid_counter15"></div>
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
                          <img src={product15} alt="product" />
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
                          <Link to="">Juste un Clou ring</Link>
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
                            <div id="bid_counter11"></div>
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
                <ul className="pagination">
                  <li>
                    <Link to="">
                      <i className="flaticon-left-arrow"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">1</Link>
                  </li>
                  <li>
                    <Link to="" className="active">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="">3</Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="flaticon-right-arrow"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Product2;
