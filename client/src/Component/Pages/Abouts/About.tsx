import "./abouts.css";

function About() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./caroussel/abouts.jpg"
              className="d-block w-100"
              alt="Wild Landscape"
              style={{ height: "630px" }}
            />
          </div>
        </div>
      </div>

      <div className="chose">
        <h2>Why Choose us?</h2>
        <p>
          With an established global track record, KBM have a deep expertise in
          risk mitigation. We use only the very best cutting-edge technology to
          create <br /> your bespoke software or IT management solution.
        </p>
      </div>

      <div className="container" id="aboutmetwo">
        <div className="row" id="shield">
          <img src="./shield.webp" alt="shield" className="col-2" />
          <h4>Trust</h4>
          <p>
            You can trust KBM to provide unparalleled expertise, and advise you
            on what would be best for you.
          </p>
        </div>
        <div className="row">
          <div className="col" id="Integrity">
            <img
              src="./collaboration.webp"
              alt="collaboration"
              className="col-2"
            />
            <h4>Integrity</h4>
            <p>
              KBM will always act with integrity, and only use the very best,
              proven methods for your IT needs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" id="excellence">
            <img src="./excellence.webp" alt="excellence" className="col-2" />
            <h4>Excellence</h4>
            <p>
              Our track record demonstrates excellence – from our partnerships
              through to our expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutme">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="./brahim.jpg" alt="brahim" />
            </div>
            <div className="col6"></div>
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
    </div>
  );
}

export default About;
