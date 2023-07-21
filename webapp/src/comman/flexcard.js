import React from 'react'
import './flexcard.css';

const flexcard = (props) => {
  return (
<div className="slide-item">
    <div className="auction-item-1">
        <div className="auction-thumb">
            <a href="./product-details.html">
                <img src={props.imgSrc} alt="electronics" />
            </a>
            <a href="#0" className="rating">
                <i className="far fa-star"></i>
            </a>
            <a href="#0" className="bid">
                <i className="flaticon-auction"></i>
            </a>
        </div>
        <div className="auction-content">
            <h6 className="title">
                <a href="./product-details.html">
                    {props.productDetails}
                </a>
            </h6>
            <div className="bid-amount">
                <div className="icon">
                    <i className="flaticon-auction"></i>
                </div>
                <div className="amount-content">
                    <div className="current">{props.currentBid}</div>
                    <div className="amount">$876.00</div>
                </div>
                <div className="countdown-area">
                    <div className="countdown">
                        <div id="bid_counter1"></div>
                    </div>
                    <span className="total-bids">{props.totalBids}</span>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default flexcard