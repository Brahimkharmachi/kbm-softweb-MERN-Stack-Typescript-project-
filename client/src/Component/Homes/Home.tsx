import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./homes.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./caroussel/c2home.jpg"
              className="d-block w-100"
              alt="Wild Landscape"
              style={{ height: "630px" }}
            />
            <a href="/contact">
              <button type="button" className="btn btn-secondary">
                Book a Consultation
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="serviceshop">
        <h2> KBM Services Shop </h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cardshop ">
              <div className="card p-3 m-2">
                <a href="/service#softdev">
                  <img
                    src="./card/dev.gif"
                    className="card-img-top"
                    alt="dev"
                  />
                  <p className="mt-3">
                    Software development
                    <br />
                    for Web and Mobile
                  </p>
                </a>
              </div>
              <div className="card p-3 m-2">
                <a href="/service#softvideo">
                  <img
                    src="./card/editiing.gif"
                    className="card-img-top"
                    alt="editing"
                  />
                  <p className="mt-3">Editing Video</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="abouthome">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./professionalservices.jpg"
                className="serdev img-fluid"
                alt="serdev"
              />
            </div>
            <div className="col-md-6">
              <div className="bra">
                <h4 data-aos="fade-left">Professional services</h4>
                <p data-aos="fade-left">
                  KBM Services will always act with integrity, and only use the
                  very best proven methods for your IT needs.
                </p>
                <a href="/about">
                  <button
                    data-aos="fade-left"
                    type="button"
                    className="btn btn-secondary"
                  >
                    Our Values
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-12">
            <img src="./lets.png" className="lets" alt="lets" />
          </div>

          <div className="col-md-7" id="pcontact">
            <h4>Connect with us</h4>
            <p>
              If you have a question about our services, or how we <br /> could
              transform your company’s IT infrastructure, do not
              <br /> hesitate to get in touch with us.{" "}
            </p>
          </div>
          <div className="col-md-4">
            <a href="/contact" className="button">
              Click me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
