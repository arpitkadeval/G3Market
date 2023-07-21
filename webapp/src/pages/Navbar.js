import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { shop001, shop002, shop003, shop004 } from "../comman/AllImages.js";

const Navbar = () => {
  const [headerBar, setheaderBar] = useState("header-bar d-lg-none");
  const [searchActive, setSearchActive] = useState("search-form");
  const [menuHeader, setMenuHeader] = useState("menu ml-auto");
  const [products, setProducts] = useState("submenu d-none");
  const [productUL, setProductUL] = useState("submenu d-none");
  const [overlay, setOverlay] = useState("overlay");
  const [cartBar, setCartBar] = useState("cart-sidebar-area");
  const [account, setAccount] = useState("submenu d-none");
  const [dashBoard, setDashBoard] = useState("submenu d-none");
  const [home, setHome] = useState("submenu d-none");
  const [page, setPage] = useState("menu-item-has-children");
  const [productPage, setProductPage] = useState("menu-item-has-children");
  const [homePageLI, setHomePageLI] = useState("menu-item-has-children");
  const [accountPage, setAccountPage] = useState("menu-item-has-children");
  const [dashBoardPage, setDashBoardPage] = useState("menu-item-has-children");

  useEffect(() => {
    windows();
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const productOpen = () => {
    if (productPage === "menu-item-has-children") {
      setProductPage("menu-item-has-children open");
    } else if (productPage === "menu-item-has-children open") {
      setProductPage("menu-item-has-children");
    } else {
      setProductPage("menu-item-has-children");
    }
    if (productUL === "submenu d-none") {
      setProductUL("submenu d-block");
    } else if (productUL === "submenu d-block") {
      setProductUL("submenu d-none");
    } else {
      setProductUL("submenu d-none");
    }
  };

  const accountOpen = () => {
    if (accountPage === "menu-item-has-children") {
      setAccountPage("menu-item-has-children open");
    } else if (accountPage === "menu-item-has-children open") {
      setAccountPage("menu-item-has-children");
    } else {
      setAccountPage("menu-item-has-children");
    }
    if (account === "submenu d-none") {
      setAccount("submenu d-block");
    } else if (account === "submenu d-block") {
      setAccount("submenu d-none");
    } else {
      setAccount("submenu d-none");
    }
  };
  const dashboardOpen = () => {
    if (dashBoardPage === "menu-item-has-children") {
      setDashBoardPage("menu-item-has-children open");
    } else if (dashBoardPage === "menu-item-has-children open") {
      setDashBoardPage("menu-item-has-children");
    } else {
      setDashBoardPage("menu-item-has-children");
    }
    if (dashBoard === "submenu d-none") {
      setDashBoard("submenu d-block");
    } else if (dashBoard === "submenu d-block") {
      setDashBoard("submenu d-none");
    } else {
      setDashBoard("submenu d-none");
    }
  };
  const pagesOpen = () => {
    if (page === "menu-item-has-children") {
      setPage("menu-item-has-children open");
    } else if (page === "menu-item-has-children open") {
      setPage("menu-item-has-children");
    } else {
      setPage("menu-item-has-children");
    }

    if (products === "submenu d-none") {
      setProducts("submenu d-block");
    } else if (products === "submenu d-block") {
      setProducts("submenu d-none");
    } else {
      setProducts("submenu d-none");
    }
  };
  const homeOpen = () => {
    if (homePageLI === "menu-item-has-children") {
      setHomePageLI("menu-item-has-children open");
    } else if (homePageLI === "menu-item-has-children open") {
      setHomePageLI("menu-item-has-children");
    } else {
      setHomePageLI("menu-item-has-children");
    }

    if (home === "submenu d-none") {
      setHome("submenu d-block");
    } else if (home === "submenu d-block") {
      setHome("submenu d-none");
    } else {
      setHome("submenu d-none");
    }
  };
  const headerBarEmpty = () => {
    setHomePageLI("menu-item-has-children");
    setDashBoardPage("menu-item-has-children");
    setAccountPage("menu-item-has-children");
    setProductPage("menu-item-has-children");
    setPage("menu-item-has-children");

    setAccount("submenu d-none");
    setDashBoard("submenu d-none");
    setProducts("submenu d-none");
    setProductUL("submenu d-none");
    setHome("submenu d-none");

    if (headerBar === "header-bar d-lg-none") {
      setheaderBar("header-bar d-lg-none active");
      setMenuHeader("menu ml-auto active");
      setOverlay("overlay active");
    } else if ("header-bar d-lg-none active") {
      setheaderBar("header-bar d-lg-none");
      setMenuHeader("menu ml-auto");
      setOverlay("overlay");
    } else {
      setheaderBar("header-bar d-lg-none");
      setMenuHeader("menu ml-auto");
      setOverlay("overlay");
    }
  };

  const windows = () => {
    const nav = window.innerWidth;
    if (nav > 992) {
      setHomePageLI("menu-item-has-children open");
      setDashBoardPage("menu-item-has-children open");
      setAccountPage("menu-item-has-children open");
      setProductPage("menu-item-has-children open");
      setPage("menu-item-has-children open");

      setAccount("submenu d-block");
      setDashBoard("submenu d-block");
      setProducts("submenu d-block");
      setProductUL("submenu d-block");
      setHome("submenu d-block");
    }
  };

  const isSticky = (e) => {
    const header = document.querySelector(".header-bottom");
    const scrollTop = window.scrollY;
    scrollTop >= 70
      ? header.classList.add("active")
      : header.classList.remove("active");
  };
  return (
    <>
      <div
        className={overlay}
        onClick={() => {
          setCartBar("cart-sidebar-area");
          setOverlay("overlay");
        }}
      ></div>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul className="customer-support">
                <li>
                  <Link to="" className="mr-3">
                    <i className="fas fa-phone-alt"></i>
                    <span className="CustomerSupport d-none d-sm-inline-block">
                      Customer Support
                    </span>
                  </Link>
                </li>
                <li className="d-flex">
                  <i className="fas fa-globe"></i>
                  <select name="language" className="select-bar">
                    <option value="en">En</option>
                    <option value="Bn">Bn</option>
                    <option value="Rs">Rs</option>
                    <option value="Us">Us</option>
                    <option value="Pk">Pk</option>
                    <option value="Arg">Arg</option>
                  </select>
                </li>
              </ul>
              <ul className="cart-button-area">
                <li>
                  <div
                    className="cart-button"
                    onClick={() => {
                      setCartBar("cart-sidebar-area active");
                      setOverlay("overlay active");
                    }}
                  >
                    <i className="flaticon-shopping-basket"></i>
                    <span className="amount">08</span>
                  </div>
                </li>
                <li>
                  <Link to="/dashboard" className="user-button">
                    {/* <Link >Sign In</Link> */}
                    <i className="flaticon-user"> </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <ul className={menuHeader}>
                  <li className={homePageLI}>
                    <Link to="" onClick={homeOpen}>
                      Home
                    </Link>
                    <ul className={home}>
                      <li>
                        <Link to="/">Home Page One</Link>
                      </li>
                      <li>
                        <Link to="/home2">Home Page Two</Link>
                      </li>
                      <li>
                        <Link to="/home3">Home Page Three</Link>
                      </li>
                      <li>
                        <Link to="/home4">Home Page Four</Link>
                      </li>
                      <li>
                        <Link to="/home5">Home Page Five</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/auction">Auction</Link>
                  </li>
                  <li className={page}>
                    <Link to="" onClick={pagesOpen}>
                      Pages
                    </Link>
                    <ul className={products}>
                      <li className={productPage}>
                        <Link to="" onClick={productOpen}>
                          Product
                        </Link>
                        <ul className={productUL}>
                          <li>
                            <Link to="/auction">Product Page 1</Link>
                          </li>
                          <li>
                            <Link to="/product2">Product Page 2</Link>
                          </li>
                          <li>
                            <Link to="/product-details">Product Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={accountPage}>
                        <Link to="" onClick={accountOpen}>
                          My Account
                        </Link>
                        <ul className={account}>
                          <li>
                            <Link to="/signup">Sign Up</Link>
                          </li>
                          <li>
                            <Link to="/SignIn">Sign In</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={dashBoardPage}>
                        <Link to="" onClick={dashboardOpen}>
                          Dashboard
                        </Link>
                        <ul className={dashBoard}>
                          <li>
                            <Link to="/Dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link to="/profile">Personal Profile</Link>
                          </li>
                          <li>
                            <Link to="/mybids">My Bids</Link>
                          </li>
                          <li>
                            <Link to="/winning-bid">Winning Bids</Link>
                          </li>
                          <li>
                            <Link to="/alerts">My Alert</Link>
                          </li>
                          <li>
                            <Link to="/favorites">My Favorites</Link>
                          </li>
                          <li>
                            <Link to="/referral">Referrals</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/faq">Faqs</Link>
                      </li>
                      <li>
                        <Link to="*">404 Error</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                <form className={searchActive}>
                  <input
                    type="text"
                    placeholder="Search for brand, model...."
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
                <div className="search-bar d-md-none">
                  <Link to=""
                    onClick={() => {
                      if (searchActive === "search-form") {
                        setSearchActive("search-form active");
                      } else {
                        setSearchActive("search-form");
                      }
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
                <div className={headerBar} onClick={headerBarEmpty}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={cartBar}>
        <div className="top-content">
          <Link to="/home" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <span
            className="side-sidebar-close-btn"
            onClick={() => {
              setCartBar("cart-sidebar-area");
              setOverlay("overlay");
            }}
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="bottom-content">
          <div className="cart-products">
            <h4 className="title">Shopping cart</h4>
            <div className="single-product-item">
              <div className="thumb">
                <Link to="">
                  <img src={shop001} alt="shop" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="">Color Pencil</Link>
                </h4>
                <div className="price">
                  <span className="price">$80.00</span>
                  <del className="delPrice">$120.00</del>
                </div>
                <Link to="" className="remove-cart">
                  Remove
                </Link>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <Link to="">
                  <img src={shop002} alt="shop" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="">Water Pot</Link>
                </h4>
                <div className="price">
                  <span className="price">$80.00</span>
                  <del className="delPrice">$120.00</del>
                </div>
                <Link to="" className="remove-cart">
                  Remove
                </Link>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <Link to="">
                  <img src="assets/images/shop/shop03.jpg" alt="shop" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="">Art Paper</Link>
                </h4>
                <div className="price">
                  <span className="price">$80.00</span>
                  <del className="delPrice">$120.00</del>
                </div>
                <Link to="" className="remove-cart">
                  Remove
                </Link>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <Link to="">
                  <img src={shop003} alt="shop" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="">Stop Watch</Link>
                </h4>
                <div className="price">
                  <span className="price">$80.00</span>
                  <del className="delPrice">$120.00</del>
                </div>
                <Link to="" className="remove-cart">
                  Remove
                </Link>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <Link to="">
                  <img src={shop004} alt="shop" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title">
                  <Link to="">Comics Book</Link>
                </h4>
                <div className="price">
                  <span className="price">$80.00</span>
                  <del className="delPrice">$120.00</del>
                </div>
                <Link to="" className="remove-cart">
                  Remove
                </Link>
              </div>
            </div>
            <div className="btn-wrapper text-center">
              <Link to="" className="custom-button">
                <span>Checkout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
