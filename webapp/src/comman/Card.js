import React from 'react'
import Countdown from "react-countdown";
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = (props) => {
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
    <div className="col-sm-10 col-md-6 col-lg-4">
    <div className="auction-item-2">
      <div className="auction-thumb">
        <Link to="/product-details">
          <img src={props.imgsrc} alt="car" />
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
          <Link to="/product-details">{props.title}</Link>
        </h6>
        <div className="bid-area">
          <div className="bid-amount">
            <div className="icon">
              <i className="flaticon-auction"></i>
            </div>
            <div className="amount-content">
              <div className="current">{props.bid}</div>
              <div className="amount">{props.amount}</div>
            </div>
          </div>
          <div className="bid-amount">
            <div className="icon">
              <i className="flaticon-money"></i>
            </div>
            <div className="amount-content">
              <div className="current">{props.current}</div>
              <div className="amount">{props.amount2}</div>
            </div>
          </div>
        </div>
        <div className="countdown-area">
          <div className="countdown">
          <Countdown
              id="bid_counter26"
              date={Date.now() + 3.24e7}
              renderer={renderer}
            />
          </div>
          <span className="total-bids">{props.totalbids}</span>
        </div>
        <div className="text-center">
          <Link to="" className="custom-button">
          {props.buttonname}
          </Link>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Card