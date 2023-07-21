import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from '../../comman/Card'
import Footer from "../Footer";
import Navbar from "../Navbar";
import Countdown from "react-countdown";
import {
  auction1,
  auction2,
  auction3,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "../../comman/AllImages";
import ArrowBounce from "../../comman/ArrowBounce";

const Auction = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ day, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;

      // Render a complete state
    } else {
      // Render a countdown
      return (
        <div>
          0d : {hours}h : {minutes}m : {seconds}s
        </div>
      );
    }
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
                <span>Vehicles</span>
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
              imgsrc={auction1}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
              <Card
              imgsrc={auction2}
              title={"2018 Nissan Versa, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
              <Card
              imgsrc={auction3}
              title={"2018 Honda Accord, Sport"}
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
            <div className="product-header mb-40">
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
                  <option value="09">09</option>
                  <option value="21">21</option>
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

            <Card
              imgsrc={product1}
              title={"2019 Mercedes-Benz C, 300"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product2}
              title={"2017 Harley-Davidson XG750,"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product3}
              title={"2021 Hyundai Elantra, Sel"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product4}
              title={"2014 KIA Sorento, LX"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product5}
              title={"2019 Subaru Crosstrek, Premium"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product6}
              title={"2019 Chevrolet Equinox, LT"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product7}
              title={"2019 Ford Expedition"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product8}
              title={"2019 Buick Envision"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={product9}
              title={"2018 Dodge Grand, Sxt"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
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
        <Footer />
      </>
    </div>
  );
};

export default Auction;
