import React, { useEffect } from "react";
const ArrowBounce = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = (e) => {
    const scroll = document.querySelector(".scrollToTop");
    const scrollTop = window.scrollY;
    scrollTop >= 500
      ? scroll.classList.add("active")
      : scroll.classList.remove("active");
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <a className="scrollToTop" onClick={scrollToTop}>
      <i className="fas fa-angle-up"></i>
    </a>
  );
};
export default ArrowBounce;
