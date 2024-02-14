import "./contacts.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/contact/api/mycontact",
        {
          email,
          subject,
          message,
        }
      );
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error;
    }
  };

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
              src="./caroussel/contact.jpg"
              className="d-block w-100"
              alt="Wild Landscape"
              style={{ height: "630px" }}
            />
          </div>
        </div>
      </div>

      <div className="chose">
        <h2>Contact Us</h2>
        <p>
          If you would like to book a consultation, or have any questions about
          our services, please get in touch and one of our friendly, <br />
          professional advisors will be happy to help.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-sm-2">
            <i
              className="fab fa-whatsapp text-blue fa-3x"
              style={{ color: "#04ABCC" }}
            ></i>
          </div>

          <div className="col-sm-2">
            <i
              className="fab fa-instagram text-blue fa-3x"
              style={{ color: "#04ABCC" }}
            ></i>
          </div>
          <div className="col-sm-2">
            <i
              className="fab fa-facebook text-blue fa-3x"
              style={{ color: "#04ABCC" }}
            ></i>
          </div>
          <div className="col-sm-2">
            <i
              className="fab fa-linkedin text-blue fa-3x"
              style={{ color: "#04ABCC" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="container">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="App-header ">
          <form onSubmit={submitHandler}>
            <h1>Send Email</h1>
            <div className="mb-3 mx-1">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3 mx-1">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3 mx-1 ">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="form-control "
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Contact;
