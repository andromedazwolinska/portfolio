import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Jumbotron from "../components/Jumbotron/Jumbotron.jsx";
import "../images/avatar.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Kim jestem ?" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-7">
              <h2>Dzień dobrry!</h2>
              <p>
                Mam na imię Aneta, studiuję Informatykę na Szkole Głównej Gospodarstwa Wiejskiego w Warszawie. 
                jestem samotną matką 6-letniej kocicy Muni. W wolnej chwili uzupełniam wiedze w zakresie finansów i najnowszej technologii, oraz czytam książki i oglądam seriale na Netflixie. 

              </p>
              <h3>A tu kilka moich umiejętności:</h3>
              <ul>
                <li>świetna komunikacja w zespole </li>
                <li>
                  precyzyjność 
                </li>
                <li>
                  kreatywność 
                </li>
                <li>
                  umiejętność pracy pod presją
                </li>
                <li>
                  umiejętność znajdywania najprostszych rozwiązań 
                </li>
              </ul>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-12 col-sm-4">
              <img
                alt=""
                className="profile"
                src={require("../images/avatar.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
