import React from 'react'
import '../assets/css/main.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/aos/aos.css'

function Home() {
  return (
    <div>
      <nav className="navbar px-md-0 navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <img src="assets/img/SC_Logo.png" alt="" height="160px" />
          <a className="navbar-brand" href="index.html">SC Legal <span>A Law Firm</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">HOME</a></li>
              <li className="nav-item"><a href="founder.html" className="nav-link">FOUNDER</a></li>
              <li className="nav-item"><a href="areaOfPractice.html" className="nav-link">AREA OF PRACTICE</a></li>
              <li className="nav-item"><a href="careers.html" className="nav-link">CAREER</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('images/practice-1.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
            <div className="col-md-6 ftco-animate">
              <h2 className="subheading">Welcome To SC Legal</h2>
              <h1>SC Legal is Fighting For Your <span className="txt-rotate" data-period="500" data-rotate='[ "Freedom.", "Rights.", "Case.", "Custody." ]'></span></h1>
              <p className="mb-4">A law firm in India providing strategic and innovative legal solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="logo"><a href="#">SC Legal <span>A Law Firm</span></a></h2>
                <p>SC Legal was founded in the year 2022 by Advocate Ankita Chatterjee and Advocate Parichay Sharma. As a law firm, SC Legal offers various legal services extending from Litigation, Arbitration, Banking and Financial Services, Real Estate and Commercial Disputes. We have a varied clientele ranging from banks, financial institutions, property developers, firms as well as individuals. As a firm we focus on practical, cost-effective solutions to legal problems that adds value and emphasizes on what work works best for our clients based on the highest professional standard and work ethics. We as a law firm pay a high level of attention to developing and maintaining a personal and professional relationship with our clients, so that our past clients will always turn to us for any other legal needs that may arise for them in the future.</p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Practice Areas</h2>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Litigation</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Banking & Finance</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Real Estate</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Family & Matrimonial Disputes</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>White Collar Crimes</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Media & Entertainment</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Dispute Resolution & Arbitration</a></li>
                  <li><a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Restructuring & Insolvency</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <div className="block-23 mb-3">
                  <ul>
                    <li><a href="https://goo.gl/maps/57eZuHDK9RCJ3JWJ6"><span className="icon icon-map-marker"></span><span className="text">SC Legal, Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, Off New Link Rd, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053</span></a></li>
                    <li><a href="tel:+91-8655415028"><span className="icon icon-phone"></span><span className="text">+91 86554 15028</span></a></li>
                    <li><a href="tel:+91-9619560167"><span className="icon icon-phone"></span><span className="text">+91 96195 60167</span></a></li>
                    <li><a href="mailto:parichay@sc-legal.in"><span className="icon icon-envelope"></span><span className="text">parichay@sc-legal.in</span></a></li>
                    <li><a href="mailto:ankita@sc-legal.in"><span className="icon icon-envelope"></span><span className="text">ankita@sc-legal.in</span></a></li>
                  </ul>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className="ftco-animate"><a href="https://www.linkedin.com/in/sc-legal"><span className="icon-linkedin"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </footer>
      <div id="preloader">
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Home