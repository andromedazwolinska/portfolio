import React, { Component, Fragment } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Jumbotron from "../components/Jumbotron/Jumbotron.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Card from "../components/Card/Card.jsx";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Co potrafię ?" />
        <div className="container">
          <div className="row">
            <div className="col">
              <Carousel
                id="carouselExampleFade1"
                content={
                  <Fragment>
                    <div className="carousel-item active">
                      <Card
                        text={
                          <img
                            alt="html"
                            className="skills-img"
                            src={require("../images/html.png")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="css"
                            className="skills-img"
                            src={require("../images/css.png")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="js"
                            className="skills-img"
                            src={require("../images/js.png")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="python"
                            className="skills-img"
                            src={require("../images/python.png")}
                          />
                        }
                      />
                    </div>
                  </Fragment>
                }
              />
              <Carousel
                id="carouselExampleFade2"
                content={
                  <Fragment>
                    <div className="carousel-item active">
                      <Card
                        text={
                          <img
                            alt="react"
                            className="skills-img"
                            src={require("../images/react.svg")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="bootstrap"
                            className="skills-img"
                            src={require("../images/bootstrap.svg")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="java"
                            className="skills-img"
                            src={require("../images/java.png")}
                          />
                        }
                      />
                    </div>
                    <div className="carousel-item">
                      <Card
                        text={
                          <img
                            alt="c++"
                            className="skills-img"
                            src={require("../images/c++.svg")}
                          />
                        }
                      />
                    </div>
                  </Fragment>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
