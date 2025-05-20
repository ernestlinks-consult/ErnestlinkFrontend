import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import elc_logo from "../../../public/Images/Website_Design/elc_logo.png";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="container-fluid mt-0 mp-0" style={{ zIndex: 99 }}>
        <div className="" style={{ height: "10vh" }}>
          <nav
            className="navbar navbar-expand-lg fixed-top bg-body-light shadow"
            style={{ height: "10vh" }}>
            <div className="container ">
              {/* <Link className="navbar-brand mt-1" href="/">
                <Image
                  className="img-fluid"
                  style={{ width: "143px", height: "7vh" }}
                  src={elc_logo}
                  alt="logo"
                />
              </Link> l*/}
              <Link className="navbar-brand" href="/">
                <Image
                  className="img-fluid"
                  src="/Images/elc_logo.png"
                  alt="logo"
                  width={1200}
                  height={400}
                  style={{
                    width: "143px",
                    height: "60px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    // "@media (min-width: 640px)": {
                    //   width: "143px",
                    //   height: "50px",
                    //   marginBottom: "60px",
                    // },
                    // "@media (min-width: 1200px)": {
                    //   width: "220px",
                    //   height: "80px",
                    // },
                  }}
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navContainer collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/" ? "active" : ""
                    }`}>
                    <Link className="nav-link" aria-current="page" href="/">
                      About
                    </Link>
                  </li>

                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/clientservice" ? "active" : ""
                    }`}>
                    <Link className="nav-link" href="/clientservice">
                      Services
                    </Link>
                  </li>

                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/resources" ? "active" : ""
                    }`}>
                    <Link className="nav-link" href="/resources">
                      Resources
                    </Link>
                  </li>

                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/faqs" ? "active" : ""
                    }`}>
                    <Link className="nav-link" href="/faqs">
                      FAQs
                    </Link>
                  </li>

                  <li
                    className={`nav-item mx-4 ${
                      router.pathname === "/contact" ? "active" : ""
                    }`}>
                    <Link className="nav-link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <a className="nav-link" href="/faqs">
                  <button className="nav-link link mx-3 my-3 p-3 fw-bold text-white rounded text-decoration-none">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
