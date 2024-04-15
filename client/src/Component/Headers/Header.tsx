import "./headers.css";
import { useState, useEffect } from "react";

function ColorSchemesExample() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light sticky-lg-top ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <img src="./kbmsoftweb.png" alt="logo" width="150px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon">
            <i className="fas fa-navicon"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul
            className="navbar-nav"
            style={{
              color: "#13243F",
              gap: "55px",
              fontSize: "18px",
              fontFamily: " 'Marcellus SC','sans-serif'",
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <ul className="navbar-nav d-flex flex-row ">
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#">
                    <i className="fab fa-facebook-f text-blue"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#">
                    <i className="fab fa-instagram text-blue"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/brahim-kharmachi-1993kb/"
                  >
                    <i className="fab fa-linkedin text-blue"></i>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" href="#">
                    <i className="fab fa-whatsapp text-blue"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ColorSchemesExample;
