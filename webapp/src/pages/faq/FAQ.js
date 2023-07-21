import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/FAQ.css";
import { faq, video } from "../../comman/AllImages.js";
import { Collapse, Button, Container, Row, Col, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import ArrowBounce from "../../comman/ArrowBounce";
import { Link } from "react-router-dom";

const FAQ = () => {
  const commonAccordion = {
    firstAccordion: {
      ariaControls: "flush-collapseOne",
      span: "How to start bidding?",
      arialLabelledby: "flush-headingOne",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    secondAccordion: {
      ariaControls: "flush-collapseTwo",
      span: "Security Deposit / Bidding Power",
      arialLabelledby: "flush-headingTwo",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    thirdAccordion: {
      ariaControls: "flush-collapseThird",
      span: "Delivery time to the destination port",
      arialLabelledby: "flush-headingThird",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    fourthAccordion: {
      ariaControls: "flush-collapseFour",
      span: "How to register to bid in an auction?",
      arialLabelledby: "flush-headingFour",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    fifthAccordion: {
      ariaControls: "flush-collapseFive",
      span: "How will I know if my bid was successful?",
      arialLabelledby: "flush-headingFive",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    sixthAccordion: {
      ariaControls: "flush-collapseSix",
      span: "What happens if I bid on the wrong lot?",
      arialLabelledby: "flush-headingSix",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    seventhAccordion: {
      ariaControls: "flush-collapseSeven",
      span: "What happens if I bid on the wrong lot?",
      arialLabelledby: "flush-headingSeven",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    eighthAccordion: {
      ariaControls: "flush-collapseEight",
      span: "How to leave an absentee bid",
      arialLabelledby: "flush-headingEight",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    ninthAccordion: {
      ariaControls: "flush-collapseNine",
      span: "How do I know if I won an item?",
      arialLabelledby: "flush-headingNine",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    tenthAccordion: {
      ariaControls: "flush-collapseTen",
      span: "How do I know if I'm the high bidder?",
      arialLabelledby: "flush-headingTen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    eleventhAccordion: {
      ariaControls: "flush-collapseEleven",
      span: "Can I bid using my mobile device?",
      arialLabelledby: "flush-headingEleven",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    twelfthAccordion: {
      ariaControls: "flush-collapseTwelve",
      span: "Where do I access my saved items?",
      arialLabelledby: "flush-headingTwelve",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    thirteenthAccordion: {
      ariaControls: "flush-collapseThirteen",
      span: "Cancellations and returns",
      arialLabelledby: "flush-headingThirteen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    fourteenthAccordion: {
      ariaControls: "flush-collapseFourteen",
      span: "How to start bidding?",
      arialLabelledby: "flush-headingFourteen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    fifteenthAccordion: {
      ariaControls: "flush-collapseFifteen",
      span: "Security Deposit / Bidding Power",
      arialLabelledby: "flush-headingFifteen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    sixteenthAccordion: {
      ariaControls: "flush-collapseSixteen",
      span: "Delivery time to the destination port",
      arialLabelledby: "flush-headingSixteen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
    seventeenthAccordion: {
      ariaControls: "flush-collapseSeventeen",
      span: "How to register to bid in an auction?",
      arialLabelledby: "flush-headingSeventeen",
      p: "All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successfulbidders will receive an email notifying them of their winning bid after the auction closes.",
    },
  };
  const [dynamic, setDynamic] = useState("");
  const [videoModelShow, setVideoModelShow] = useState(false);

  const dataFlow = (item) => {
    setOpen(!open);
    if (dynamic == "") {
      setDynamic(item);
    } else {
      setDynamic("");
    }
  };

  useEffect(() => {
    setDynamic("four");
  }, []);

  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const onOpenModal = () => setOpenVideo(true);
  const onCloseModal = () => setOpenVideo(false);

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
                <span>Faqs</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="faq-section padding-bottom mt--240 mt-lg--440 pos-rel">
          <div className="container">
            <div className="section-header cl-white mw-100 left-style">
              <h2 className="title">FAQ</h2>
              <p>
                Do not hesitate to send us an email if you can't find what
                you're looking for.
              </p>
            </div>
            <div className="row mb--50">
              <div className="col-lg-8 mb-50">
                <div
                  className="faq-wrapper accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div
                    className={
                      dynamic === "first" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("first")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "first" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.firstAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "first" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.firstAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "second" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("second")}
                    aria-controls="example-collapse-text"
                    aria-expanded={false}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "second" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.secondAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "second" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.secondAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>

                  <div
                    className={
                      dynamic === "three" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("three")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "three" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.thirdAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "three" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.thirdAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "four" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("four")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span className="title">
                        {commonAccordion?.fourthAccordion.span}
                        fourthAccordionasasa
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "four" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.fourthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>

                  <div
                    className={
                      dynamic === "five" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("five")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "five" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.fifthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "five" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.fifthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "six" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("six")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "six" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.sixthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "six" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.sixthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "seven" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("seven")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "seven" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.seventhAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "seven" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.seventhAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "eight" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("eight")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "eight" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.eighthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "eight" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.eighthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "nine" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("nine")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "nine" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.ninthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "nine" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.ninthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>

                  <div
                    className={
                      dynamic === "ten" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("ten")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "ten" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.tenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "ten" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.tenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "eleven" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("eleven")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "eleven" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.eleventhAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "eleven" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.eleventhAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "twelve" ? "faq-item open active" : "faq-item"
                    }
                    onClick={() => dataFlow("twelve")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "twelve" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.twelfthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "twelve" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.twelfthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "thirteen"
                        ? "faq-item open active"
                        : "faq-item"
                    }
                    onClick={() => dataFlow("thirteen")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "thirteen" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.thirteenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "thirteen" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.thirteenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "fourteen"
                        ? "faq-item open active"
                        : "faq-item"
                    }
                    onClick={() => dataFlow("fourteen")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "fourteen" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.fourteenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "fourteen" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.fourteenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "fifteen"
                        ? "faq-item open active"
                        : "faq-item"
                    }
                    onClick={() => dataFlow("fifteen")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "fifteen" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.fifteenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "fifteen" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.fifteenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "sixteen"
                        ? "faq-item open active"
                        : "faq-item"
                    }
                    onClick={() => dataFlow("sixteen")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "sixteen" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.sixteenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "sixteen" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.sixteenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                  <div
                    className={
                      dynamic === "seventeen"
                        ? "faq-item open active"
                        : "faq-item"
                    }
                    onClick={() => dataFlow("seventeen")}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <div className="faq-title">
                      <img src={faq} alt="css" />
                      <span
                        className="title"
                        style={{
                          color: `${dynamic === "seventeen" ? "red" : "black"}`,
                        }}
                      >
                        {commonAccordion?.seventeenthAccordion.span}
                      </span>
                      <span className="right-icon"></span>
                    </div>

                    <Collapse in={dynamic === "seventeen" ? true : false}>
                      <div id="example-collapse-text">
                        <p style={{ padding: "30px 0" }}>
                          {commonAccordion?.seventeenthAccordion?.p}
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-50">
                <aside className="sticky-menu">
                  <div className="faq-menu bg_img mb-30 faqBg">
                    <ul id="faq-menu">
                      <li className="nav-item">
                        <Link className="nav-link active" to="">
                          For Companies
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          For Freelancers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Your Account
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Pricing Plans
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Technical
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Security
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-video mb-30">
                    <Link
                    to=''
                      // href="https://www.youtube.com/watch?v=Mj3QejzYZ70"
                      className="video-area popup"
                    >
                      {/* <Modal
                        show={videoModelShow}
                        onHide={() => setVideoModelShow(false)}
                        className="popUp"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <div className="modalVideo">
                          <ReactPlayer className="videoUrl" url="https://youtu.be/0cbXeXP2Wgg" />
                        </div>
                   
              
                  
                      </Modal> */}

                      <img
                        src="http://i3.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
                        alt="faq"
                      />
                      <div className="video-button-2" onClick={onOpenModal}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className="fas fa-play"></i>
                      </div>
                    </Link>
                    <h5 className="title">Watch Video Tour</h5>
                  </div>
                  <div className="popular-article pt-30 mb--20">
                    <h4 className="title mb-20">Most Popular Articles</h4>
                    <div className="popular-article-item">
                      <Link to="" className="right-con">
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                      <h5 className="title">
                        <Link to="">Tips for winning</Link>
                      </h5>
                      <p>
                        Found an item you love? Here are some tips for winning
                        your next item:
                      </p>
                    </div>
                    <div className="popular-article-item">
                      <Link to="" className="right-con">
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                      <h5 className="title">
                        <Link to="">How to bid at an Auction</Link>
                      </h5>
                      <p>
                        Bidding at auction can be terrifying, especially your
                        first time.
                      </p>
                    </div>
                    <div className="popular-article-item">
                      <Link to="" className="right-con">
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                      <h5 className="title">
                        <Link to="">Bid increments</Link>
                      </h5>
                      <p>
                        Each auction house sets their own bidding increments
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
      <Modal
        show={openVideo}
        onHide={onCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ReactPlayer
            className="videoUrl"
            url="https://youtu.be/JGwWNGJdvx8"
            controls={true}
            playsInline={true}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FAQ;
