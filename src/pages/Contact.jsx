import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Jumbotron from "../components/Jumbotron/Jumbotron.jsx";
import "./Contact.css";
import "../images/linkedin.png";
import "../images/github.png";
import "../images/gmail.png";

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <Navbar />
        <Jumbotron title="Jak się ze mną skontaktować ?" />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <a
                href="mailto:andromedazwolinska@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  className="logos"
                  src={require("../images/gmail.png")}
                />
              </a>
            </div>
            <div className="col-4">
              <a
                target="_blank"
                href="https://github.com/andromedazwolinska/"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  className="logos"
                  src={require("../images/github.png")}
                />
              </a>
            </div>
            <div className="col-4">
              <a
                target="_blank"
                href="https://facebook.com/aneta.zwolinska.7/"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  className="logos"
                  src={require("../images/facebook.png")}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
