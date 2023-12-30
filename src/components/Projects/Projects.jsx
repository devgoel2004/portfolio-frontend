import React from "react";
import "./Projects.css";
import chat from "../../assets/Chat.jpg";
import restaurant from "../../assets/Restaurant.png";
import weather from "../../assets/Weather.jpg";
import wea from "../../assets/Weather.png";
import stackoverflow from "../../assets/stackoverflow.png";
const Projects = () => {
  return (
    <>
      <section id="portfolio" class="section portfolio">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-heading">
              <h2>My Last Projects :</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
              <div class="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/stackoverflow-frontend/"
                  target="_blank">
                  <img src={stackoverflow} alt="chat" />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
              <div class="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/Website-Restaurant/"
                  target="_blank">
                  <img src={restaurant} alt="Restaurant" />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
              <div class="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/weather-app-react/"
                  target="_blank">
                  <img src={weather} alt="Weather" />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
              <div class="portfolio-img">
                <a
                  href="https://devgoel2004.github.io/weather-app-react/"
                  target="_blank">
                  <img src={wea} alt="Weather" />
                </a>
              </div>
            </div>
          </div>
          <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
              <div class="portfolio-img">
                <a href="https://letschat-n5lo.onrender.com/" target="_blank">
                  <img src={chat} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
