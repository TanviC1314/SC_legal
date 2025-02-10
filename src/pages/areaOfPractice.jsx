import React from 'react'

function AreaOfPractice() {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/SC_Logo.png" alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="founder">Founder</a></li>
              <li><a href="areaOfPractice" className="active">Area of Practice</a></li>
              <li><a href="careers">Career</a></li>
              <li><a href="contact">Contact</a></li>
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
      <main id="main">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <br />
                <h2>Area of Practice</h2>
              </div>
            </div>
          </div>
        </div>
        <section id="services" className="services">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/litigation.png" alt="Litigation" />
                  <h4><a href="#" className="stretched-link">Litigation</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-bank"></i>
                  <h4><a href="#" className="stretched-link">Banking & Finance</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-building"></i>
                  <h4><a href="#" className="stretched-link">Real Estate</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-people"></i>
                  <h4><a href="#" className="stretched-link">Family & Matrimonial Disputes</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/whitecolur.png" alt="White Collar Crimes" />
                  <h4><a href="#" className="stretched-link">White Collar Crimes</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <i className="bi bi-camera-reels"></i>
                  <h4><a href="#" className="stretched-link">Media & Entertainment</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/dispute.png" alt="Dispute Resolution & Arbitration" />
                  <h4><a href="#" className="stretched-link">Dispute Resolution & Arbitration</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex">
                <div className="service-item position-relative">
                  <img src="/assets/img/AOP/insolvency.png" alt="Restructuring & Insolvency" />
                  <h4><a href="#" className="stretched-link">Restructuring & Insolvency</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AreaOfPractice