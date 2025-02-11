// Home.jsx
import { useEffect, useState } from "react";
import "../css/style.css";
import "../assets/css/home.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/magnific-popup.css";
import "./Home.css"; // Make sure to create this file for the new styles

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Freedom.", " Rights.", " Case."];
  const baseText = "For Your ";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  useEffect(() => {
    let timer;
    
    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText === currentWord) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
          return;
        }
        
        timer = setTimeout(type, typingSpeed);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        
        timer = setTimeout(type, deletingSpeed);
      }
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentWordIndex, isDeleting]);

  return (
    <div className="home-container" style={{ fontFamily: '"Poppins", Arial, sans-serif' }}>
      <div className="background-overlay"></div>
      
      <nav className="navbar px-md-0 navbar-expand-lg navbar-light ftco-navbar-light" id="ftco-navbar">
        <div className="container" style={{ height: 100 }}>
          <img src="assets/img/SC_Logo.png" alt="" height="160" />
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
                <a href="index" className="nav-link">HOME</a>
              </li>
              <li className="nav-item">
                <a href="founder" className="nav-link">PARTNERS</a>
              </li>
              <li className="nav-item">
                <a href="areaOfPractice" className="nav-link">AREA OF PRACTICE</a>
              </li>
              <li className="nav-item">
                <a href="careers" className="nav-link">CAREER</a>
              </li>
              <li className="nav-item">
                <a href="contact" className="nav-link">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div style={{marginLeft:100}} className="text-left">
          <h2 style={{
            fontSize: '20px',
            color: '#DABA6D',
            textTransform: 'uppercase',
            fontFamily: '"Poppins", Arial, sans-serif',
            fontWeight: 800,
            marginTop:80,
          }} className="welcome-text">
            Welcome To SC Legal
          </h2>
          <div className="typewriter-container">
            <h1 style={{
              fontSize: '62px',
              color: '#fff',
              lineHeight: '1.5',
              fontWeight: 700,
              fontFamily: '"Poppins", Arial, sans-serif',
            }} className="main-heading">
              SC Legal is Fighting
            </h1>
            <h1 style={{fontSize: '62px', marginTop:"-20px",fontFamily: '"Poppins", Arial, sans-serif'}} className="main-heading">
              {baseText}
              <span className="typed-text">
                {displayText}
                <span className="cursor"></span>
              </span>
            </h1>
          </div>
          <p style={{
            fontSize: '22px',
            lineHeight: '1.5',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: '"Poppins", Arial, sans-serif',
          }} className="tagline">
            A law firm in India providing strategic and innovative legal solutions.
          </p>
        </div>
      </div>

          
      <div
        id="preloader"
        style={{
          display: isLoading ? "flex" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000,
          transition: "opacity 0.5s ease-in-out",
          opacity: isLoading ? "1" : "0",
        }}
      >
        <div className="line"></div>
      </div>

      {/* Scripts */}
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
      <script src="js/google-map.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}

export default Home;