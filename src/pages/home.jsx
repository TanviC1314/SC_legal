import React, { useEffect, useState } from "react";
import '../css/style.css'
import '../assets/css/home.css'
import '../css/animate.css'
import '../css/owl.carousel.min.css'
import '../css/magnific-popup.css'

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, []);

  return (
    <div>
      <div>
        <nav
          className="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <img src="assets/img/SC_Logo.png" alt="" height="160px" />
            <a className="navbar-brand" href="/home">
              JSG Partners <span>A Law Firm</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index" className="nav-link">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a href="founder" className="nav-link">
                    PARTNERS
                  </a>
                </li>
                <li className="nav-item">
                  <a href="areaOfPractice" className="nav-link">
                    AREA OF PRACTICE
                  </a>
                </li>
                <li className="nav-item">
                  <a href="careers" className="nav-link">
                    CAREER
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact" className="nav-link">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="hero-wrap js-fullheight"
          style={{backgroundImage: 'url(images/practice-1.jpg)'}}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <div className="col-md-6 ftco-animate">
                <h2 className="subheading">Welcome To JSG PARTNERS</h2>
                <h1>
                  JSG PARTNERS is Fighting For Your
                  <span
                    className="txt-rotate"
                    data-period="500"
                    data-rotate='[ "Freedom.", "Rights.", "Case." ]'
                  ></span>
                </h1>
                <p className="mb-4">
                  A law firm in India providing strategic and innovative legal
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="logo">
                    <a href="#">
                      JSG PARTNERS <span>A Law Firm</span>
                    </a>
                  </h2>
                  <p>
                    JSG PARTNERS was founded in the year 2022 by Advocate Ankita
                    Chatterjee and Advocate Parichay Sharma. As a law firm, JSG
                    PARTNERS offers various legal services extending from
                    Litigation, Arbitration, Banking and Financial Services,
                    Real Estate and Commercial Disputes. We have a varied
                    clientele ranging from banks, financial institutions,
                    property developers, firms as well as individuals.As a firm
                    we focus on practical, cost-effective solutions to legal
                    problems that adds value and emphasizes on what work works
                    best for our clients based on the highest professional
                    standard and work ethics. We as a law firm pay a high level
                    of attention to developing and maintaining a personal and
                    professional relationship with our clients, so that our past
                    clients will always turn to us for any other legal needs
                    that may arise for them in the future.
                  </p>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-5">
                  <h2 className="ftco-heading-2">Practice Areas</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>
                        Litigation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>Banking
                        & Finance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>Real
                        Estate
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>Family &
                        Matrimonial Disputes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>White
                        Collar Crimes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>Media &
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>Dispute
                        Resolution & Arbitration
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        <span className="ion-ios-arrow-forward mr-3"></span>
                        Restructuring & Insolvency
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <div className="block-23 mb-3">
                    <ul>
                      <li>
                        <a href="https://goo.gl/maps/57eZuHDK9RCJ3JWJ6">
                          <span className="icon icon-map-marker"></span>
                          <span className="text">
                            JSG PARTNERS, Office No. 303, B- Wing, 03rd Floor,
                            Oberoi Chambers, Off New Link Rd, Veera Desai
                            Industrial Estate, Andheri West, Mumbai,
                            Maharashtra 400053
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+91-8655415028">
                          <span className="icon icon-phone"></span>
                          <span className="text">+91 86554 15028</span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+91-9619560167">
                          <span className="icon icon-phone"></span>
                          <span className="text">+91 96195 60167</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:parichay@sc-legal.in">
                          <span className="icon icon-envelope"></span>
                          <span className="text">parichay@sc-legal.in</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:ankita@sc-legal.in">
                          <span className="icon icon-envelope"></span>
                          <span className="text">ankita@sc-legal.in</span>
                        </a>
                      </li>
                    </ul>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate">
                        <a href="https://www.linkedin.com/in/sc-legal">
                          <span className="icon-linkedin"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center"></div>
              </div>
            </div>
          </div>
        </footer>

        <div 
        id="preloader"
        style={{
          display: isLoading ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          transition: 'opacity 0.5s ease-in-out',
          opacity: isLoading ? '1' : '0'
        }}
      >
        <div className="line"></div>
      </div>

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/aos.js"></script>
        <script src="js/jquery.animateNumber.min.js"></script>
        <script src="js/main.js"></script>
        <script src="assets/js/animate.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="js/google-map.js"></script>
        <script src="js/main.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default Home;
