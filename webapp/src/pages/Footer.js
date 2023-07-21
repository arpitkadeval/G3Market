import React from "react";
import "../styles/Footer.css";
import {
  footerTopImg,
  p1,
  p2,
  p3,
  c2,
  c3,
  c4,
  newSlater,
  footerLogo,
  footerIcon1,
  footerIcon2,
  footerIcon3,
  footerIcon4
} from "../comman/AllImages";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg_img padding-top oh footerBg">
      <div className="footer-top-shape">
        <img src={footerTopImg} alt="css" />
      </div>
      <div className="anime-wrapper">
        <div className="anime-1 plus-anime">
          <img src={p1} alt="footer" />
        </div>
        <div className="anime-2 plus-anime">
          <img src={p2} alt="footer" />
        </div>
        <div className="anime-3 plus-anime">
          <img src={p3} alt="footer" />
        </div>
        <div className="anime-5 zigzag">
          <img src={c2} alt="footer" />
        </div>
        <div className="anime-6 zigzag">
          <img src={c3} alt="footer" />
        </div>
        <div className="anime-7 zigzag">
          <img src={c4} alt="footer" />
        </div>
      </div>
      <div className="newslater-wrapper">
        <div className="container">
          <div className="newslater-area">
            <div className="newslater-thumb">
              <img src={newSlater} alt="footer" />
            </div>
            <div className="newslater-content">
              <div className="section-header left-style mb-low">
                <h5 className="cate">Subscribe to Sbidu</h5>
                <h3 className="title">To Get Exclusive Benefits</h3>
              </div>
              <form className="subscribe-form">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <button type="submit" className="custom-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top padding-bottom padding-top">
        <div className="container">
          <div className="row mb--60">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget widget-links">
                <h5 className="title">Auction Categories</h5>
                <ul className="links-list">
                  <li>
                    <Link to="">Ending Now</Link>
                  </li>
                  <li>
                    <Link to="">Vehicles</Link>
                  </li>
                  <li>
                    <Link to="">Watches</Link>
                  </li>
                  <li>
                    <Link to="">Electronics</Link>
                  </li>
                  <li>
                    <Link to="">Real Estate</Link>
                  </li>
                  <li>
                    <Link to="">Jewelry</Link>
                  </li>
                  <li>
                    <Link to="">Art</Link>
                  </li>
                  <li>
                    <Link to="">Sports & Outdoor</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget widget-links">
                <h5 className="title">About Us</h5>
                <ul className="links-list">
                  <li>
                    <Link to="">About Sbidu</Link>
                  </li>
                  <li>
                    <Link to="">Help</Link>
                  </li>
                  <li>
                    <Link to="">Affiliates</Link>
                  </li>
                  <li>
                    <Link to="">Jobs</Link>
                  </li>
                  <li>
                    <Link to="">Press</Link>
                  </li>
                  <li>
                    <Link to="">Our blog</Link>
                  </li>
                  <li>
                    <Link to="">Collectors' portal</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget widget-links">
                <h5 className="title">We're Here to Help</h5>
                <ul className="links-list">
                  <li>
                    <Link to="">Your Account</Link>
                  </li>
                  <li>
                    <Link to="">Safe and Secure</Link>
                  </li>
                  <li>
                    <Link to="">Shipping Information</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="">Help & FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget widget-follow">
                <h5 className="title">Follow Us</h5>
                <ul className="links-list">
                  <li>
                    <Link to="">
                      <i className="fas fa-phone-alt"></i>(646) 663-4575
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fas fa-blender-phone"></i>(646) 968-0608
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fas fa-envelope-open-text"></i>
                      help@engotheme.com
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fas fa-location-arrow"></i>1201 Broadway
                      Suite
                    </Link>
                  </li>
                </ul>
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
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-area">
            <div className="footer-bottom-wrapper">
                    <div className="logo">
                        <Link to="/"><img src={footerLogo} alt="logo" /></Link>
                    </div>
                    <ul className="gateway-area">
                        <li>
                            <Link to=""><img src={footerIcon1} alt="footer" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={footerIcon2} alt="footer" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={footerIcon3} alt="footer" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src={footerIcon4} alt="footer" /></Link>
                        </li>
                    </ul>
                    <div className="copyright"><p>&copy; Copyright 2021 | <Link to="">Sbidu</Link> By <Link to="">Uiaxis</Link></p></div>
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
