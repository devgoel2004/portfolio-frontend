import React, { useState } from "react";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div class="aside">
      <div class="logo">
        <a href="#">
          <span>D</span>evCraft
        </a>
      </div>
      <div class="nav-toggler">
        <span></span>
      </div>
      <ul class="nav">
        <li>
          <a href="#home">
            <i class="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i class="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#service">
            <i class="fa fa-list"></i>Services
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i class="fa fa-briefcase"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            <i class="fa fa-comments"></i>Contacts
          </a>
        </li>
        <li>
          <a href="#testimonial">
            <i class="fa  fa-quote-left"></i>Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
