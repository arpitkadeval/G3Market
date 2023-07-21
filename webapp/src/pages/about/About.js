import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import OwlCarousel from "react-owl-carousel";
import ArrowBounce from "../../comman/ArrowBounce";
import Management from "./component/management";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  icon01,
  icon02,
  aboutImg,
  colorIcon1,
  colorIcon2,
  colorIcon3,
  colorIcon4,
  colorIcon5,
  colorIcon6,
  team1,
  team2,
  team3,
  team4,
  avatar1,
  avatar2,
  avatar3,
} from "../../comman/AllImages";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const optionsReview = {
    margin: 10,
    responsiveClass: true,
    responsiveClass: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,

    responsive: {
      450: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <>
        <Navbar />
        <ArrowBounce />
        <div className="hero-section">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/home" className=".a">Home</Link>
              </li>
              <li>
                <Link to="/about">Pages</Link>
              </li>
              <li>
                <span>About Us</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="about-section">
          <div className="container">
            <div className="about-wrapper mt--100 mt-lg--440 padding-top">
              <div className="row">
                <div className="col-lg-7 col-xl-6">
                  <div className="about-content">
                    <h4 className="subtitle">About Us</h4>
                    <h2 className="title">
                      <span className="d-block">OVER 60</span> YEARS EXPERIENCE
                    </h2>
                    <p>Innovation have made us leaders in auctions platform</p>
                    <div className="item-area">
                      <div className="item">
                        <div className="thumb">
                          <img src={icon01} alt="about" />
                        </div>
                        <p>award-winning team</p>
                      </div>
                      <div className="item">
                        <div className="thumb">
                          <img src={icon02} alt="about" />
                        </div>
                        <p>AFFILIATIONS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-thumb">
                <img src={aboutImg} alt="about" />
              </div>
            </div>
          </div>
        </section>
        <div className="counter-section padding-top mt--10">
          <div className="container">
            <div className="row justify-content-center mb-30-none">
              <div className="col-sm-6 col-lg-3">
                <div className="counter-item">
                  <h3 className="counter-header">
                    <CountUp
                      className="title counter"
                      duration={2}
                      redraw={true}
                      end={62}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>

                    <span className="title">M</span>
                  </h3>
                  <p>ITEMS AUCTIONED</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="counter-item">
                  <h3 className="counter-header">
                    <span>$</span>
                    <CountUp
                      className="title counter"
                      end={887}
                      redraw={true}
                      duration={2}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="title">M</span>
                  </h3>
                  <p>IN SECURE BIDS</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="counter-item">
                  <h3 className="counter-header">
                    <CountUp
                      className="title counter"
                      end={63}
                      redraw={true}
                      duration={2}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="title">M</span>
                  </h3>
                  <p>ITEMS AUCTIONED</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="counter-item">
                  <h3 className="counter-header">
                    <span>0</span>
                    <CountUp
                      className="title counter"
                      end={5}
                      redraw={true}
                      duration={2}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span className="title">K</span>
                  </h3>
                  <p>AUCTION EXPERTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="overview-section padding-top">
          <div className="container mw-lg-100 p-lg-0">
            <div className="row m-0">
              <div className="col-lg-6 p-0">
                <div className="overview-content">
                  <div className="section-header text-lg-left">
                    <h2 className="title">What can you expect?</h2>
                    <p>
                      Voluptate aut blanditiis accusantium officiis expedita
                      dolorem inventore odio reiciendis obcaecati quod nisi quae
                    </p>
                  </div>
                  <div className="row mb--50">
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon1} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Real-time Auction</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon2} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Supports Multiple Currency</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon3} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Winner Announcement</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon4} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Supports Multiple Currency</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon5} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Show all bidders history</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="expert-item">
                        <div className="thumb">
                          <img src={colorIcon6} alt="overview" />
                        </div>
                        <div className="content">
                          <h6 className="title">Add to watchlist</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pl-30 pr-0">
                <div className="w-100 h-100 bg_img aboutSide"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-in-section padding-top padding-bottom">
          <div className="container">
            <div className="call-wrapper cl-white bg_img call-bg">
              <div className="section-header">
                <h3 className="title">
                  Register for Free & Start Bidding Now!
                </h3>
                <p>From cars to diamonds to iPhones, we have it all.</p>
              </div>
              <Link to="" className="custom-button white">
                Register
              </Link>
            </div>
          </div>
        </section>
        <section className="team-section section-bg padding-top padding-bottom">
          <div className="container">
            <div className="section-header">
              <h2 className="title">Meet the Management Team</h2>
              <p>
                Our team consists of passionate and talented individuals
                invested in your success.
              </p>
            </div>
            <div className="team-wrapper row justify-content-between">
              
              <Management img={team1} title={"Kent Quinn"} />
              <Management img={team2} title={"Dustin Day"} />
              <Management img={team3} title={"Antonia Little"} />
              <Management img={team4} title={"Marie Wolfe"} />
            </div>
          </div>
        </section>
        <section className="client-section padding-top padding-bottom">
          <div className="container">
            <div className="section-header">
              <h2 className="title">Don’t just take our word for it!</h2>
              <p>
                Our hard work is paying off. Great reviews from amazing
                customers.
              </p>
            </div>
            <div className="m--15">
              <div className="client-slider">
                <OwlCarousel {...optionsReview}>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        I can't stop bidding! It's a great way to spend some
                        time and I want everything on Sbidu.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <Link to="" className="a">
                          <img src={avatar1} alt="client" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link className="a" to="">Alexis Moore</Link>
                        </h6>
                        <div className="ratings">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        I came I saw I won. Love what I have won, and will try
                        to win something else.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <Link to="" className="a" >
                          <img src={avatar2} alt="client" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link to="" className="a">Darin Griffin</Link>
                        </h6>
                        <div className="ratings">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        This was my first time, but it was exciting. I will try
                        it again. Thank you so much.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <Link to="" className="a">
                          <img src={avatar3} alt="client" />
                        </Link>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link to="" className="a">Tom Powell</Link>
                        </h6>
                        <div className="ratings">
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                          <span>
                            <i className="fas fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default About;
