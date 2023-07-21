import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import VisibilitySensor from "react-visibility-sensor";
import Countdown from "react-countdown";
import CountUp from "react-countup";
import Footer from "../Footer";
import "../../styles/ProductDetails.css";
import "../../styles/FAQ.css";
import {
  search,
  icon1,
  icon2,
  icon3,
  tab1,
  tab2,
  tab3,
  tab4,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
} from "../../comman/AllImages.js";
import {
  BidHistory,
  Delivery,
  Description,
  Questions,
} from "../../comman/productCommanTab.js";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Controller,
  Keyboard,
  Mousewheel,
  Navigation,
  FreeMode,
  Scrollbar,
  Thumbs,
  Virtual,
  Pagination,
  A11y,
  Lazy,
} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import ArrowBounce from "../../comman/ArrowBounce";
import { Link } from "react-router-dom";

const ProductDetails = (e) => {
  const [tabView, setTabView] = useState("Description");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gellaryRefs = useRef();
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();
  const thumeRefs = useRef();

  useEffect(() => {
    gellaryRef(gellaryRefs);
    thumbRef(thumeRefs);
  }, [gellaryRefs, thumeRefs]);

  const ChangeTab = (name) => {
    setTabView(name);
  };

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ day, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          0d : {hours}h : {minutes}m : {seconds}s
        </div>
      );
    }
  };

  const thumbRef = (ref) => {
    if (ref) setThumbsSwiper(ref.current.swiper);
    if (ref === null) setThumbsSwiper(ref.current.swiper);
  };
  const gellaryRef = (ref) => {
    if (ref) setThumbsSwiper(ref.current.swiper);
    if (ref === null) setThumbsSwiper(ref.current.swiper);
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
        <section className="product-details padding-bottom mt--240 mt-lg--440">
          <div className="container">
            <Swiper
              ref={gellaryRefs}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[
                Controller,
                Pagination,
                Navigation,
                Lazy,
                Autoplay,
                Thumbs,
                Keyboard,
                Mousewheel,
                Scrollbar,
                Virtual,
                A11y,
              ]}
              preloadImages={false}
              freeMode={true}
              // autoplay={true}
              lazy={true}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              loop={false}
              spaceBetween={30}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              <div>
                <div>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider1} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider2} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider3} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider4} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider5} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-top-item">
                      <div className="slide-inner">
                        <img src={slider6} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>

            <Swiper
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                499: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                990: {
                  slidesPerView: 4,
                },
              }}
              ref={thumeRefs}
              slideToClickedSlide={true}
              slidesPerView={6}
              onClick={(swiper) => setThumbsSwiper(swiper)}
              modules={[Controller, Autoplay]}
            >
              <div className="product-details-slider-wrapper">
                <div
                  className="product-bottom-slider owl-theme owl-carousel"
                  id="sync2"
                >
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider1} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider2} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider3} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider4} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider5} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-bottom-item">
                      <div className="slide-inner">
                        <img src={slider6} alt="product" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
              <span
                className="det-prev det-nav"
                style={{ zIndex: "99" }}
                ref={navigationPrevRef}
              >
                <i className="fas fa-angle-left"></i>
              </span>
              <span
                className="det-next det-nav"
                style={{ zIndex: "99" }}
                ref={navigationNextRef}
              >
                <i className="fas fa-angle-right"></i>
              </span>
            </Swiper>
            <div className="row mt-40-60-80">
              <div className="col-lg-8">
                <div className="product-details-content">
                  <div className="product-details-header">
                    <h2 className="title">The Breeze Zodiac IX</h2>
                    <ul>
                      <li>Listing ID: 14076242</li>
                      <li>Item #: 7300-3356862</li>
                    </ul>
                  </div>
                  <ul className="price-table mb-30">
                    <li className="header">
                      <h5 className="current">Current Price</h5>
                      <h3 className="price">US $700.00</h3>
                    </li>
                    <li>
                      <span className="details">Buyer's Premium</span>
                      <h5 className="info">10.00%</h5>
                    </li>
                    <li>
                      <span className="details">Bid Increment (US)</span>
                      <h5 className="info">$50.00</h5>
                    </li>
                  </ul>
                  <div className="product-bid-area">
                    <form className="product-bid-form">
                      <div className="search-icon">
                        <img src={search} alt="product" />
                      </div>
                      <input type="text" placeholder="Enter you bid amount" />
                      <button type="submit" className="custom-button">
                        Submit a bid
                      </button>
                    </form>
                  </div>
                  <div className="buy-now-area">
                    <Link to="" className="custom-button">
                      Buy Now: $4,200
                    </Link>
                    <Link to="" className="rating custom-button active border">
                      <i className="fas fa-star"></i> Add to Wishlist
                    </Link>
                    <div className="share-area">
                      <span>Share to:</span>
                      <ul>
                        <li>
                          <Link to="">
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
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-sidebar-area">
                  <div className="product-single-sidebar mb-3">
                    <h6 className="title">This Auction Ends in:</h6>
                    <div className="countdown">
                      <Countdown
                        id="bid_counter1"
                        date={Date.now() + 4.68e7}
                        renderer={renderer}
                      />
                    </div>
                    <div className="side-counter-area">
                      <div className="side-counter-item">
                        <div className="thumb">
                          <img src={icon1} alt="product" />
                        </div>
                        <div className="content">
                          <h3 className="count-title">
                            <CountUp
                              className="counter"
                              duration={1.3}
                              redraw={true}
                              end={61}
                            >
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h3>
                          <p>Active Bidders</p>
                        </div>
                      </div>
                      <div className="side-counter-item">
                        <div className="thumb">
                          <img src={icon2} alt="product" />
                        </div>
                        <div className="content">
                          <h3 className="count-title">
                            <CountUp
                              className="counter"
                              duration={1.3}
                              redraw={true}
                              end={203}
                            >
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h3>
                          <p>Watching</p>
                        </div>
                      </div>
                      <div className="side-counter-item">
                        <div className="thumb">
                          <img src={icon3} alt="product" />
                        </div>
                        <div className="content">
                          <h3 className="count-title">
                            <CountUp
                              className="counter"
                              duration={1.3}
                              redraw={true}
                              end={82}
                            >
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h3>
                          <p>Total Bids</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="" className="cart-link">
                    View Shipping, Payment & Auction Policies
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tab-menu-area mb-40-60 mt-70-100">
            <div className="container">
              <ul className="product-tab-menu nav nav-tabs">
                <li onClick={() => ChangeTab("Description")}>
                  <Link
                    to=""
                    className={tabView === "Description" ? "active" : ""}
                    data-toggle="tab"
                  >
                    <div className="thumb">
                      <img src={tab1} alt="product" />
                    </div>
                    <div className="content" style={{ cursor: "pointer" }}>
                      Description
                    </div>
                  </Link>
                </li>
                <li onClick={() => ChangeTab("delevery")}>
                  <Link
                    to=""
                    className={tabView === "delevery" ? "active" : ""}
                    data-toggle="tab"
                  >
                    <div className="thumb">
                      <img src={tab2} alt="product" />
                    </div>
                    <div className="content" style={{ cursor: "pointer" }}>
                      Delivery Options
                    </div>
                  </Link>
                </li>
                <li onClick={() => ChangeTab("bidHistory")}>
                  <Link
                    to=""
                    className={tabView === "bidHistory" ? "active" : ""}
                    data-toggle="tab"
                  >
                    <div className="thumb">
                      <img src={tab3} alt="product" />
                    </div>
                    <div className="content" style={{ cursor: "pointer" }}>
                      Bid History (36)
                    </div>
                  </Link>
                </li>
                <li onClick={() => ChangeTab("questions")}>
                  <Link
                    to=""
                    className={tabView === "questions" ? "active" : ""}
                    data-toggle="tab"
                  >
                    <div className="thumb">
                      <img src={tab4} alt="product" />
                    </div>
                    <div className="content" style={{ cursor: "pointer" }}>
                      Questions{" "}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {tabView === "Description" ? (
            <Description />
          ) : tabView === "delevery" ? (
            <Delivery />
          ) : tabView === "bidHistory" ? (
            <BidHistory />
          ) : (
            <Questions />
          )}
        </section>
        <Footer />
      </>
    </div>
  );
};

export default ProductDetails;
