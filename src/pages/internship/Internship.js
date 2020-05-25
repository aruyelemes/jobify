import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Internship.css";
import { Fade } from "react-reveal";

class Company extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">


          <div className="row">
            <h3>Vacancy Name</h3>
            <h4>Stack</h4>
            <p>description</p>
          </div>

          <div className="row">
            <h3>Vacancy Name</h3>
            <h4>Stack</h4>
            <p>description</p>
          </div>

          <div className="row">
            <h3>Vacancy Name</h3>
            <h4>Stack</h4>
            <p>description</p>
          </div>

          </div>
       
        </div>
      </div>
    </Fade>

      
    
      </div>
    );
  }
}

export default Company;
