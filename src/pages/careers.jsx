import React from 'react'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/aos/aos.css'

function Careers() {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home.html" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/SC_Logo.png" alt="sc" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="founder.html">Founder</a></li>
              <li><a href="areaOfPractice.html">Area of Practice</a></li>
              <li><a href="careers.html" className="active">Career</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <div className="header-social-links">
            <a href="https://www.linkedin.com/in/sc-legal" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
      <br /><br /><br />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Career</h2>
              </div>
            </div>
          </div>
        </div>
        <section id="contact" className="contact">
          <div className="container">
            <div className="row justify-content-center mt-4">
              <div className="col-lg-9">
                <form action="forms/career.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="text" className="form-control" name="resume" id="resume" placeholder="Resume (URL Link)" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="ref" rows="5" placeholder="Reference"></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your details has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Careers