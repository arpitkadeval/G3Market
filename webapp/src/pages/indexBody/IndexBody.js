import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/main.css";
import "../../styles/IndexBody.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../comman/Card";
import {
  Autoplay,
  Controller,
  Keyboard,
  Mousewheel,
  Navigation,
  Scrollbar,
  Thumbs,
  Virtual,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  banner1,
  bannerShape,
  auction01,
  auction02,
  auction03,
  auction04,
  auction05,
  auction06,
  carBg,
  car1,
  auction1,
  auction2,
  auction3,
  jwelryBg,
  coin,
  jauction1,
  jauction2,
  jauction3,
  watch1,
  watch2,
  watch3,
  popular1,
  popular2,
  popular3,
  popular4,
  popular5,
  popular6,
  coinBg,
  coin1,
  coin2,
  coin3,
  coin4,
  realBg,
  realstate1,
  how1,
  how2,
  how3,
  avatar1,
  avatar2,
  avatar3,
  cameraicon,
  electronics1,
  electronics2,
  electronics3,
  electronics4,
  artIcon,
  art1,
  art2,
  art3,
  art4,
} from "../../comman/AllImages";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import Countdown from "react-countdown";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/users/userAction";
import ArrowBounce from "../../comman/ArrowBounce";

const IndexBody = () => {
  library.add(
    faQuoteLeft,
    faQuoteRight,
    faLongArrowAltLeft,
    faLongArrowAltRight
  );
  const [swiper, setSwiper] = useState([]);
  const [swiperSecond, setSwiperSecond] = useState([]);
  const [swiperThird, setSwiperThird] = useState([]);
  const [swiperFourth, setSwiperFourth] = useState([]);

  const [SliderPreview, setSliderPreview] = useState(6);
  const [SliderPreviewFourth, setSliderPreviewFourth] = useState(1);
  const [SliderPreviewSecond, setSliderPreviewSecond] = useState(1);
  const [SliderPreviewThird, setSliderPreviewThird] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const prevRef = useRef();
  const nextRef = useRef();
  const prevRefSecond = useRef();
  const nextRefSecond = useRef();
  const prevRefThird = useRef();
  const nextRefThird = useRef();
  const prevRefFourth = useRef();
  const nextRefFourth = useRef();
  const thumeRefs = useRef();
  const gellaryRefs = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    gellaryRef(gellaryRefs);
    thumbRef(thumeRefs);
  }, [gellaryRefs, thumeRefs]);

  const thumbRef = (ref) => {
    if (ref) setThumbsSwiper(ref.current.swiper);
    if (ref === null) setThumbsSwiper(ref.current.swiper);
  };
  const gellaryRef = (ref) => {
    if (ref) setThumbsSwiper(ref.current.swiper);
    if (ref === null) setThumbsSwiper(ref.current.swiper);
  };

  useEffect(() => {
    const getId = localStorage.getItem("userData");
    dispatch(getUser(getId));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (swiper && swiper?.params?.navigation) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, 1000);
  }, [swiper]);

  useEffect(() => {
    setTimeout(() => {
      if (swiperSecond && swiperSecond?.params?.navigation) {
        swiperSecond.params.navigation.prevEl = prevRefSecond.current;
        swiperSecond.params.navigation.nextEl = nextRefSecond.current;
        swiperSecond.navigation.init();
        swiperSecond.navigation.update();
      }
    }, 1000);
  }, [swiperSecond]);

  useEffect(() => {
    setTimeout(() => {
      if (swiperThird && swiperThird?.params?.navigation) {
        swiperThird.params.navigation.prevEl = prevRefThird.current;
        swiperThird.params.navigation.nextEl = nextRefThird.current;
        swiperThird.navigation.init();
        swiperThird.navigation.update();
      }
    }, 1000);
  }, [swiperThird]);

  useEffect(() => {
    setTimeout(() => {
      if (swiperFourth && swiperFourth?.params?.navigation) {
        swiperFourth.params.navigation.prevEl = prevRefFourth.current;
        swiperFourth.params.navigation.nextEl = nextRefFourth.current;
        swiperFourth.navigation.init();
        swiperFourth.navigation.update();
      }
    }, 1000);
  }, [swiperFourth]);

  document.addEventListener("scroll", () => {
    const nav = window.innerWidth;
    if (nav < 450) {
      setSliderPreview(1);
    } else if (nav < 768) {
      setSliderPreview(2);
    } else if (nav < 992) {
      setSliderPreview(3);
    } else if (nav < 1200) {
      setSliderPreview(5);
    } else if (nav > 1200) {
      setSliderPreview(6);
    }
  });
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
  return (
    <>
      <Navbar />
      <section className="banner-section bg_img bgImg">
        <ArrowBounce />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-xl-6">
              <div className="banner-content cl-white">
                <h5 className="cate">Next Generation Auction</h5>
                <h1 className="title">
                  <span className="d-xl-block">Find Your</span> Next Deal!
                </h1>
                <p>
                  Online Auction is where everyone goes to shop, sell,and give,
                  while discovering variety and affordability.
                </p>
                <a href="#0" className="custom-button yellow btn-large">
                  Get Started
                </a>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6">
              <div className="banner-thumb-2">
                <img src={banner1} alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape d-none d-lg-block">
          <img src={bannerShape} alt="css" />
        </div>
      </section>

      <div className="browse-section ash-bg">
        <div className="browse-slider-section mt--140">
          <div className="container">
            <div className="section-header-2 cl-white mb-4">
              <div className="left">
                <h6 className="title pl-0 w-100">Browse the highlights</h6>
              </div>
              {/* 
              <div className="slider-nav">
                <div className="bro-prev" ref={prevRef}>
                <i className="flaticon-left-arrow"></i>
                </div>
                <div className="bro-next active" ref={nextRef}>
                <i className="flaticon-right-arrow"></i>
                </div>
              </div> */}

              <div className="slider-nav">
                <a href="#0" className="bro-prev" ref={prevRef}>
                  <i className="flaticon-left-arrow"></i>
                </a>
                <a href="#0" className="bro-next active" ref={nextRef}>
                  <i className="flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
            <div className="m--140">
              <div className="browse-slider owl-theme">
                <Swiper
                  // autoplay={true}
                  keyboard={true}
                  zoom={true}
                  slidesPerView={SliderPreview}
                  loop={true}
                  modules={[
                    Navigation,
                    Autoplay,
                    Controller,
                    Keyboard,
                    Mousewheel,
                    Scrollbar,
                    Thumbs,
                    Virtual,
                  ]}
                  navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current,
                  }}
                  onSwiper={setSwiper}
                  // className="swiper-container"
                  // onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction01} alt="auction" />
                      <span className="info">Vehicles</span>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction02} alt="auction" />
                      <span className="info">Jewelry</span>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction03} alt="auction" />
                      <span className="info">Watches</span>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction04} alt="auction" />
                      <span className="info">Electronics</span>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction05} alt="auction" />
                      <span className="info">Sports</span>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#0" className="browse-item">
                      <img src={auction06} alt="auction" />
                      <span className="info">Real Estate</span>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="car-auction-section padding-bottom padding-top pos-rel oh ash-bg">
        <div className="car-bg">
          <img src={carBg} alt="car" />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img src={car1} alt="header-icons" />
              </div>
              <div className="title-area">
                <h2 className="title">Vehicles</h2>
                <p>We offer affordable Vehicles</p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
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
              title={"2018 Honda Accord, Sport"}
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
      <section className="jewelry-auction-section padding-bottom padding-top pos-rel">
        <div className="jewelry-bg d-none d-xl-block">
          <img src={jwelryBg} alt="jewelry" />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img src={coin} alt="header-icons" />
              </div>
              <div className="title-area">
                <h2 className="title">Jewelry</h2>
                <p>
                  Online jewelry auctions where you can bid now and save money
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <Card
              imgsrc={jauction1}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={jauction2}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={jauction3}
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
      <section className="call-in-section padding-top pt-max-xl-0">
        <div className="container">
          <div className="call-wrapper cl-white bg_img call-bg">
            <div className="section-header">
              <h3 className="title">Register for Free & Start Bidding Now!</h3>
              <p>From cars to diamonds to iPhones, we have it all.</p>
            </div>
            <a href="sign-up.html" className="custom-button white">
              Register
            </a>
          </div>
        </div>
      </section>
      <section className="watches-auction-section padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img src={coin} alt="header-icons" />
              </div>
              <div className="title-area">
                <h2 className="title">Watches</h2>
                <p>Shop for men & women designer brand watches</p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <Card
              imgsrc={watch1}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={watch2}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={watch3}
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
      <section className="popular-auction padding-top pos-rel">
        <div className="popular-bg bg_img popularBg"></div>
        <div className="container">
          <div className="section-header cl-white">
            <span className="cate">Closing Within 24 Hours</span>
            <h2 className="title">Popular Auctions</h2>
            <p>
              Bid and win great deals,Our auction process is simple, efficient,
              and transparent.
            </p>
          </div>
          <div className="popular-auction-wrapper">
            <div className="row justify-content-center mb-30-none">
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular1} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        Apple Macbook Pro Laptop
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular2} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        Canon EOS Rebel T6I Digital Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular3} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        14k Gold Geneve Watch, 24.5g
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular4} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        14K White Gold 185.60 Grams 5.95 Carats
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular5} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        2009 Toyota Prius (Medford, NY 11763)
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={popular6} alt="popular" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="./product-details.html">
                        .6 Gram Pure Gold Nugget
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction"></i>
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="coins-and-bullion-auction-section padding-bottom padding-top pos-rel pb-max-xl-0">
        <div className="jewelry-bg d-none d-xl-block">
          <img src={coinBg} alt="coin" />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img src={coin} alt="header-icons" />
              </div>
              <div className="title-area">
                <h2 className="title">Coins & Bullion</h2>
                <p>
                  Discover rare, foreign, & ancient coins that are worth
                  collecting
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <Card
              imgsrc={coin1}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={coin2}
              title={"2018 Honda Accord, Sport"}
              bid={"Current Bid"}
              amount={"$876.00"}
              current={"Buy Now"}
              amount2={"$5,00.00"}
              totalbids={"30 Bids"}
              buttonname={"Submit a bid"}
            />
            <Card
              imgsrc={coin3}
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
      <section className="real-estate-auction padding-top padding-bottom pos-rel oh">
        <div className="car-bg">
          <img src={realBg} alt="realstate" />
        </div>

        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img src={coin} alt="header-icons" />
              </div>
              <div className="title-area">
                <h2 className="title">Real Estate</h2>
                <p>
                  Find auctions for Homes, Condos, Residential & Commercial
                  Properties.
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="auction-slider-4 owl-theme">
            <Swiper
              autoplay={true}
              mousewheel={true}
              ref={gellaryRefs}
              thumbs={{ swiper: thumbsSwiper }}
              onSlideChange={(swiper) => {
                setSwiperSecond(swiper);
              }}
              keyboard={true}
              slidesPerView={SliderPreviewSecond}
              zoom={true}
              centeredSlides={true}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              // slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: prevRefSecond?.current,
                nextEl: nextRefSecond?.current,
              }}
              modules={[
                Navigation,
                Autoplay,
                Controller,
                Keyboard,
                Scrollbar,
                Thumbs,
                Virtual,
                Pagination,
              ]}
            >
              <SwiperSlide>
                <div className="auction-item-4">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={realstate1} alt="realstate" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h4 className="title">
                      <a href="./product-details.html">
                        Brand New Apartments In Esenyurt, Istanbul
                      </a>
                    </h4>
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
                        <Countdown
                          id="bid_counter30"
                          date={Date.now() + 3.24e7}
                          renderer={renderer}
                        />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="auction-item-4">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={realstate1} alt="realstate" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h4 className="title">
                      <a href="./product-details.html">
                        Brand New Apartments In Esenyurt, Istanbul
                      </a>
                    </h4>
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
                        <Countdown
                          id="bid_counter30"
                          date={Date.now() + 3.24e7}
                          renderer={renderer}
                        />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="auction-item-4">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={realstate1} alt="realstate" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h4 className="title">
                      <a href="./product-details.html">
                        Brand New Apartments In Esenyurt, Istanbul
                      </a>
                    </h4>
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
                        <Countdown
                          id="bid_counter30"
                          date={Date.now() + 3.24e7}
                          renderer={renderer}
                        />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="auction-item-4">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={realstate1} alt="realstate" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h4 className="title">
                      <a href="./product-details.html">
                        Brand New Apartments In Esenyurt, Istanbul
                      </a>
                    </h4>
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
                        <Countdown
                          id="bid_counter30"
                          date={Date.now() + 3.24e7}
                          renderer={renderer}
                        />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="auction-item-4">
                  <div className="auction-thumb">
                    <a href="./product-details.html">
                      <img src={realstate1} alt="realstate" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction"></i>
                    </a>
                  </div>
                  <div className="auction-content">
                    <h4 className="title">
                      <a href="./product-details.html">
                        Brand New Apartments In Esenyurt, Istanbul
                      </a>
                    </h4>
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
                        <Countdown
                          id="bid_counter30"
                          date={Date.now() + 3.24e7}
                          renderer={renderer}
                        />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider-nav real-style ml-auto">
            <a className="real-prev" ref={prevRefSecond}>
              <i className="flaticon-left-arrow"></i>
            </a>
            <Swiper
              ref={thumeRefs}
              slideToClickedSlide={true}
              slidesPerView={5}
              onClick={(swiper) => setThumbsSwiper(swiper)}
              modules={[Controller, Autoplay]}
              className="owl-dots"
            >
              {/* <div className="owl-dots"> */}
              <SwiperSlide className="owl-dot">
                <span></span>
              </SwiperSlide>
              <SwiperSlide className="owl-dot">
                <span></span>
              </SwiperSlide>
              <SwiperSlide className="owl-dot">
                <span></span>
              </SwiperSlide>
              <SwiperSlide className="owl-dot">
                <span></span>
              </SwiperSlide>
              <SwiperSlide className="owl-dot">
                <span></span>
              </SwiperSlide>
              {/* </div> */}
            </Swiper>
            <a className="real-next active" ref={nextRefSecond}>
              <i className="flaticon-right-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="art-and-electronics-auction-section padding-top">
        <div className="container">
          <div className="row justify-content-center mb--50">
            <div className="col-xl-6 col-lg-8 mb-50">
              <div className="section-header-2">
                <div className="left">
                  <div className="thumb">
                    <img src={cameraicon} alt="header-icons" />
                  </div>
                  <h2 className="title">Electronics</h2>
                </div>
                <div className="slider-nav">
                  <a href="#0" className="electro-prev" ref={prevRefThird}>
                    <i className="flaticon-left-arrow"></i>
                  </a>
                  <a
                    href="#0"
                    className="electro-next active"
                    ref={nextRefThird}
                  >
                    <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="auction-slider-1 mb-30-none">
                <Swiper
                  keyboard={true}
                  zoom={true}
                  slidesPerView={SliderPreviewThird}
                  // slidesPerView={1}
                  loop={true}
                  modules={[
                    Navigation,
                    Autoplay,
                    Controller,
                    Keyboard,
                    Mousewheel,
                    Scrollbar,
                    Thumbs,
                    Virtual,
                  ]}
                  navigation={{
                    prevEl: prevRefThird?.current,
                    nextEl: nextRefThird?.current,
                  }}
                  onSwiper={setSwiperThird}
                  // onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="slide-item">
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics1} alt="electronics" />
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
                              Magnifying Glasses, Jewelry Loupe odit qui
                              corporis
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter1"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics2} alt="electronics" />
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
                              Surveillance WiFi Exterieur, 1080P Camera
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter2"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics3} alt="electronics" />
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
                              WiFi Doorbell Camera for Apartments
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter3"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics4} alt="electronics" />
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
                              GPD Pocket 2 Ultrabook 7" inch
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter4"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-item">
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics1} alt="electronics" />
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
                              Magnifying Glasses, Jewelry Loupe odit qui
                              corporis
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter5"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics2} alt="electronics" />
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
                              Surveillance WiFi Exterieur, 1080P Camera
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter6"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics3} alt="electronics" />
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
                              WiFi Doorbell Camera for Apartments
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter7"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={electronics4} alt="electronics" />
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
                              GPD Pocket 2 Ultrabook 7" inch
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter8"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 mb-50">
              <div className="section-header-2">
                <div className="left">
                  <div className="thumb">
                    <img src={artIcon} alt="header-icons" />
                  </div>
                  <h2 className="title">Art</h2>
                </div>
                <div className="slider-nav">
                  <a href="#0" className="art-prev" ref={prevRefFourth}>
                    <i className="flaticon-left-arrow"></i>
                  </a>
                  <a href="#0" className="art-next active" ref={nextRefFourth}>
                    <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="auction-slider-2  mb-30-none">
                <Swiper
                  keyboard={true}
                  zoom={true}
                  slidesPerView={SliderPreviewFourth}
                  // slidesPerView={1}
                  loop={true}
                  modules={[
                    Navigation,
                    Autoplay,
                    Controller,
                    Keyboard,
                    Mousewheel,
                    Scrollbar,
                    Thumbs,
                    Virtual,
                  ]}
                  navigation={{
                    prevEl: prevRefFourth?.current,
                    nextEl: nextRefFourth?.current,
                  }}
                  onSwiper={setSwiperFourth}
                  // onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="slide-item">
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art1} alt="art" />
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
                              Magnifying Glasses, Jewelry Loupe odit qui
                              corporis
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter9"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art2} alt="art" />
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
                              Surveillance WiFi Exterieur, 1080P Camera
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter10"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art3} alt="art" />
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
                              WiFi Doorbell Camera for Apartments
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter11"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art4} alt="art" />
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
                              GPD Pocket 2 Ultrabook 7" inch
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter12"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-item">
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art1} alt="art" />
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
                              Magnifying Glasses, Jewelry Loupe odit qui
                              corporis
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter13"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art2} alt="art" />
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
                              Surveillance WiFi Exterieur, 1080P Camera
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter14"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art3} alt="art" />
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
                              WiFi Doorbell Camera for Apartments
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter15"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-item-1">
                        <div className="auction-thumb">
                          <a href="./product-details.html">
                            <img src={art4} alt="art" />
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
                              GPD Pocket 2 Ultrabook 7" inch
                            </a>
                          </h6>
                          <div className="bid-amount">
                            <div className="icon">
                              <i className="flaticon-auction"></i>
                            </div>
                            <div className="amount-content">
                              <div className="current">Current Bid</div>
                              <div className="amount">$876.00</div>
                            </div>
                          </div>
                          <div className="countdown-area">
                            <div className="countdown">
                              <div id="bid_counter16"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section padding-top">
        <div className="container">
          <div className="how-wrapper section-bg">
            <div className="section-header text-lg-left">
              <h2 className="title">How it works</h2>
              <p>Easy 3 steps to win</p>
            </div>
            <div className="row justify-content-center mb--40">
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src={how1} alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Sign Up</h4>
                    <p>No Credit Card Required</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src={how2} alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Bid</h4>
                    <p>Bidding is free Only pay if you win</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src={how3} alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Win</h4>
                    <p>Fun - Excitement - Great deals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2 className="title">Don’t just take our word for it!</h2>
            <p>
              Our hard work is paying off. Great reviews from amazing customers.
            </p>
          </div>
          <div className="m--15">
            <div className="client-slider d-flex">
              <Swiper
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },

                  767: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                className="revieSlider"
                keyboard={true}
                zoom={true}
                slidesPerView={3}
                // slidesPerView={1}
                loop={true}
                modules={[
                  Navigation,
                  Controller,
                  Keyboard,
                  Mousewheel,
                  Scrollbar,
                  Thumbs,
                  Virtual,
                ]}
              >
                <SwiperSlide>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        I can't stop bidding! It's a great way to spend some
                        time and I want everything on Sbidu.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <a href="#0">
                          <img src={avatar1} alt="client" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#0">Alexis Moore</a>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        I came I saw I won. Love what I have won, and will try
                        to win something else.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <a href="#0">
                          <img src={avatar2} alt="client" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#0">Darin Griffin</a>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-item">
                    <div className="client-content">
                      <p>
                        This was my first time, but it was exciting. I will try
                        it again. Thank you so much.
                      </p>
                    </div>
                    <div className="client-author">
                      <div className="thumb">
                        <a href="#0">
                          <img src={avatar3} alt="client" />
                        </a>
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <a href="#0">Tom Powell</a>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexBody;
