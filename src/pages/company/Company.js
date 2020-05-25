import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Company.css";
import { Fade } from "react-reveal";


class Company extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fade bottom duration={1000} distance="40px">
     
  
          <div className="cart">

          <div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img className="logo" src="https://static10.tgstat.ru/channels/_0/ed/edaad410d8b6d701509e50dc26a8e4cf.jpg"/>

        <div class="property-image-title">
        </div>
      </div></a>
    <div class="property-description">
      <h5> Company name </h5>
      <p>Company description</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
      </div>
    </a>
  </div>
</div>


<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img className="logo" src="https://static10.tgstat.ru/channels/_0/ed/edaad410d8b6d701509e50dc26a8e4cf.jpg"/>

        <div class="property-image-title">
        </div>
      </div></a>
      <div class="property-description">
      <h5> Company name </h5>
      <p>Company description</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
      </div>
    </a>
  </div>
</div>



<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
      <img className="logo" src="https://static10.tgstat.ru/channels/_0/ed/edaad410d8b6d701509e50dc26a8e4cf.jpg"/>

        <div class="property-image-title">
        </div>
      </div></a>
      <div class="property-description">
      <h5> Company name </h5>
      <p>Company description</p>
    </div>
    <a href="#">
      <div class="property-social-icons">
      </div>
    </a>
  </div>
</div>



          </div>


    </Fade>

      
    
      </div>
    );
  }
}

export default Company;
