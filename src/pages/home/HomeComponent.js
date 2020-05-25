import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import { Fade } from "react-reveal";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Jobify</h1>
              <p className="greeting-text-p subTitle">The Easiest Way To Get Your Dream Job</p>
              
            
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../assests/images/feelingProud.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>

      
    
      </div>
    );
  }
}

export default Home;
