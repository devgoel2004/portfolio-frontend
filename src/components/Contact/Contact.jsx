import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://porfolio-backend-zxmw.vercel.app/api/v1/sendEmail",
        {
          name,
          email,
          subject,
          message,
        }
      );
      toast.success("Email sent", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(res.data);
    } catch (error) {
      toast.error("Something wrong");
      console.log(`Error send data`, error);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <section id="contact" class="contact section">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 class="contact-title padd-15">Have You Any Questions ?</h3>
          <h4 class="contact-sub-title padd-15">I' M AT YOUR SERVICES</h4>
          <div class="row">
            <div class="contact-info-item padd-15">
              <div class="icon">
                <a href="tel:+919690011021">
                  <i class="fa fa-phone"></i>
                </a>
                <h4>Call</h4>
                <p>+91 9690011021</p>
              </div>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <a
                  href="https://maps.app.goo.gl/5urSU8oXpAFRTxVo9"
                  target="_blank">
                  <i class="fa fa-map-marker-alt"></i>
                </a>
                <h4>Office</h4>
                <a href="https://maps.app.goo.gl/5urSU8oXpAFRTxVo9">
                  <p>Ghaziabad</p>
                </a>
              </div>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>devgoel901@gmail.com</p>
              </div>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <a
                  href="https://devgoel2004.github.io/portfolio"
                  target="_blank">
                  <i class="fa fa-globe-europe"></i>
                </a>
                <h4>Website</h4>
                <a href="https://devgoel2004.github.io/portfolio-frontend">
                  <p>https://devgoel2004.github.io/portfolio-frontend</p>
                </a>
              </div>
            </div>
          </div>

          <h3 class="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 class="contact-sub-title padd-15">
            I' M VERY RESPONSIVE TO MESSAGE
          </h4>

          <div class="row">
            <div class="contact-form padd-15">
              <div class="row">
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                </div>
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                      value={subject}
                      onChange={handleSubject}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="fomr-item col-12 padd-15">
                  <div class="form-group">
                    <textarea
                      name=""
                      class="form-control"
                      id=""
                      placeholder="Message"
                      onChange={handleMessage}
                      value={message}></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <button
                      type="submit"
                      style="margin-top: 20px"
                      class="btn"
                      onClick={handleSubmit}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
