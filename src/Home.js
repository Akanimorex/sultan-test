import React, { useState, useEffect } from "react";

import "./App.css";
import "./assets/css/main.css";
import logo from "./assets/img/mtn-logo-nav.svg";
import axios from "axios";

const App = () => {
  const [searchValue, setSearchValue] = useState([]);

  const [gify, setGify] = useState("");
  const search = (event) => {
    if (event.key === "Enter") {
      setGify(event.target.value);
    }

    // console.log(gify);
  };

  // api to search the giphy
  useEffect(() => {
    const apiPath = `https://api.giphy.com/v1/gifs/search?api_key=DtqLutoYrnl2XJiHjetvO6FsRZg5Tdzg&q=${gify}&limit=25&offset=0&rating=g&lang=en`;
    axios.get(apiPath).then((resp) => {
      console.log(resp.data.data);
      setSearchValue(resp.data.data);
    });
  }, [gify]);

  return (
    <div>
      <header>
        <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-light">
          <p className="navbar-brand">
            <img src={logo} alt="logo" className="" width="45" height="40" />{" "}
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-lg-flex d-sm-block">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown pr-2">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Personal
                  </p>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item">Something else here</p>
                  </div>
                </li>

                <li className="nav-item pr-2">
                  <p className="nav-link">Business</p>
                </li>

                <li className="nav-item dropdown pr-2">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Investors
                  </p>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item">Something else here</p>
                  </div>
                </li>
                <li className="nav-item pr-2">
                  <p className="nav-link">Foundation</p>
                </li>
                <li className="nav-item pr-2">
                  <p className="nav-link">Event</p>
                </li>
                <li className="nav-item dropdown pr-2">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Support
                  </p>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item">Something else here</p>
                  </div>
                </li>
                <li className="nav-item pr-2">
                  <p className="nav-link">About Us</p>
                </li>
                <li className="nav-item pr-2">
                  <p className="nav-link">Careers</p>
                </li>
                <li className="nav-item dropdown pr-2">
                  <p
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contact Us
                  </p>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item">Something else here</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="navbar-nav m-3 ml-auto">
              <input
                className="nav-input form-control"
                onKeyPress={search}
                type="text"
                placeholder="Search"
                // onChange={(e) => setGify(e.target.value)}
                aria-label="Search"
              />
            </div>
          </div>
        </nav>

        <div className="land">
          <div className="banner"></div>
          <div>
            <button className="back-link" type="default">
              {"<"} Back
            </button>
          </div>
          <div className="land-text">
            <p className="font-weight-bold">Contact</p>
            <h1 className="font-weight-bold">MTN Suppliers</h1>
          </div>
        </div>
        {/* <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          height="25px"
          viewBox="0 0 1366 25"
          space="preserve"
          preserveAspectRatio="none"
          class="mtn-curve_concave mtn-curve_curve-desktop"
        >
          <path
            d="M683.1,23.9C386.6,23.9,129.2,14.1,0,0v25h1366V0C1236.7,14.1,979.4,23.9,683.1,23.9z"
            className="mtn-svg-fill--white"
            style={{ zIndex: "2" }}
          ></path>
        </svg> */}
      </header>

      <div className="display-box">
        <div className="container web-container">
          {searchValue.map((info) => {
            console.log(info.images.original, "original");
            return (
              <img
                src={info.images.original.url}
                width="100"
                height="100"
                key={info.id}
                alt={info.title}
              />
            );
          })}
        </div>
      </div>

      <main>
        <div className="container web-container mt-5">
          <h3>Existing MTN supplier</h3>
          <p>
            MTN has a responsibility to ensure that our business practices are
            conducted according to local and international laws, and adhere to
            the highest levels of ethical and moral conduct.
          </p>
          <p>
            We embrace this across all parts of our business, and we expect the
            same from our suppliers. The Supplier Code of Conduct sets out our
            approach to ethical and sustainable business practices and aims for
            the highest ethical conduct. It outlines our commitment to respect
            and promote human rights and fair workplace practices, including
            equal opportunities, environmentally sustainable business
            activities, and a zero-tolerance policy to bribery and corruption.
          </p>
          <p>
            MTN expects its suppliers to embrace this commitment to integrity by
            complying with and training its employees and subcontractors on the
            Supplier Code of Conduct.
          </p>
          <p>
            By working together, we can make the customer’s lives a whole lot
            brighter.
          </p>
        </div>

        <div className="web-container container pt-5 pb-5">
          <div className="row download-flex">
            <div className="col-md-6 col-sm-12">
              <div className="download-card">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Supplier password Notice</p>
                    <figcaption>
                      <p className="font-weight-bold">(3.7Mb)</p>
                    </figcaption>
                  </div>
                  <div className="circle">
                    <span className="fa fa-download  text-center download-icon"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="download-card">
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Supplier password Notice</p>
                    <figcaption>
                      <p className="font-weight-bold">(3.7Mb)</p>
                    </figcaption>
                  </div>
                  <div className="circle">
                    <span className="fa fa-download  text-center download-icon"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="become-sect">
          {/* <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            height="25px"
            viewBox="0 0 500 25"
            style={{ enableBackground: "new 0 0 500 25;" }}
            space="preserve"
            preserveAspectRatio="none"
            class="mtn-curve__convex mtn-curve__curve-mobile"
          >
            <path
              d="M0,0c166.7,33.3,333.3,33.3,500,0H0z"
              class="mtn-svg-fill--white"
            ></path>
          </svg> */}
          <div className="web-container container">
            <h3>Become An MTN Suplier</h3>
            <p>
              If you believe you can join MTN’s vision to make our customers
              lives a whole lot brighter, then click on apply below to fill in
              the registration form.
            </p>
            <div className="row download-flex">
              <div className="col-md-6 col-sm-12">
                <div className="download-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Supplier password Notice</p>
                      <figcaption>
                        <p className="font-weight-bold">(3.7Mb)</p>
                      </figcaption>
                    </div>
                    <div className="circle">
                      <span className="fa fa-download  text-center download-icon"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="download-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Supplier password Notice</p>
                      <figcaption>
                        <p className="font-weight-bold">(3.7Mb)</p>
                      </figcaption>
                    </div>
                    <div className="circle">
                      <span className="fa fa-download  text-center download-icon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="web-container container">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                <ul className="list-unstyled">
                  <p className="font-weight-bold">Personal</p>
                  <li>Services</li>
                  <li>Data</li>
                  <li>Devices</li>
                  <li>Getting Started</li>
                  <li>myMTN App</li>
                  <p className="font-weight-bold">About Us</p>
                </ul>
              </div>
              <div className="col-md-2 col-sm-12">
                <ul className="list-unstyled footer-list-two">
                  <li className="font-weight-bold">Business</li>
                  <li className="font-weight-bold">Careers</li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-12">
                <ul className="list-unstyled">
                  <p className="font-weight-bold">Investors</p>
                  <li>More In Investors</li>
                  <li>Financial Reporting</li>
                  <li>Shareholders</li>
                  <li>Announcements</li>
                </ul>
                <ul className="list-unstyled">
                  <li className="font-weight-bold">Contact Us</li>
                  <li>MTN Supplier</li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-12">
                <p className="font-weight-bold">Foundation</p>
              </div>
              <div className="col-md-2 col-sm-12">
                <p className="font-weight-bold">Events</p>
              </div>
              <div className="col-md-2 col-sm-12">
                <ul className="list-unstyled">
                  <p className="font-weight-bold"> Support</p>
                  <li>Help Center</li>
                  <li>Community</li>
                </ul>
              </div>
            </div>
            <div className="row bottom-of-it">
              <div className="col-md-6 col-sm-12">
                <ul className="list-unstyled footer-socials ">
                  <li className="">
                    <p className="fa fa-facebook"></p>
                  </li>
                  <li className="">
                    <p className="fa fa-twitter"></p>
                  </li>
                  <li>
                    <p className="fa fa-linkedin"></p>
                  </li>
                  <li>
                    <p className="fa fa-youtube"></p>
                  </li>
                  <li>
                    <p className="fa fa-instagram"></p>
                  </li>
                </ul>
                <p className="footer-text">
                  © 2020 MTN Nigeria Communications PLC, All rights reserved.
                  <br></br>
                  Privacy Policy & Data Protection
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <div>
                  <input
                    className=" form-control foot-input"
                    type="search"
                    placeholder="Nigeria"
                    aria-label="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
