import React from "react";
import "./Home.css";
import me from "../../assets/me.jpg";
const Home = () => {
  return (
    <>
      <section id="home" class="home section">
        <div class="container">
          <div class="row">
            <div class="home-info padd-15">
              <h3 class="hello">
                Hello, my name is <span class="name"> Dev Goel</span>
              </h3>
              <h3 class="my-profession">
                I' m a <span class="typing">Web Developer</span>
              </h3>
              <p>
                I'm a Web Developer with extensive experience for over 1.5
                years. My expertise is to create websites, which can handle the
                data and to develop the backend of the website.
              </p>
              <a
                href="https://www.linkedin.com/in/devgoel901/"
                class="btn hire-me">
                Let's Connect{" "}
                <i
                  style={{ fontSize: "18px" }}
                  className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div class="home-img padd-15">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
