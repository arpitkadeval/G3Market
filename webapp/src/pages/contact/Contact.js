import React from "react";
import { contact } from "../../comman/AllImages";
import "../../styles/Contact.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useNavigate, Link } from "react-router-dom";
import ArrowBounce from "../../comman/ArrowBounce";

const Contact = () => {
  return (
    <div>
      <>
        <Navbar />
        <ArrowBounce />
        <div className="hero-section">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
          <div className="bg_img hero-bg bottom_center heroBg"></div>
        </div>
        <section className="contact-section padding-bottom">
          <div className="container">
            <div className="contact-wrapper padding-top padding-bottom mt--100 mt-lg--440">
              <div className="section-header">
                <h5 className="cate">Contact Us</h5>
                <h2 className="title">get in touch</h2>
                <p>We'd love to hear from you! Let us know how we can help.</p>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <form className="contact-form" id="contact_form">
                    <div className="form-group">
                      <label for="name">
                        <i className="far fa-user"></i>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="name">
                        <i className="fas fa-envelope-open-text"></i>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Email ID"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="message" className="message">
                        <i className="far fa-envelope"></i>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Type Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group text-center mb-0">
                      <button type="submit" className="custom-button">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-lg-5 d-lg-block d-none">
                  <img src={contact} className="w-100" alt="images" />
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

export default Contact;
