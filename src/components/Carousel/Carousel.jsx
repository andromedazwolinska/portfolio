import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {this.props.content}
        </div>
        <a
          className="carousel-control-prev"
          href={`#${this.props.id}`}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Poprzednie</span>
        </a>
        <a
          className="carousel-control-next"
          href={`#${this.props.id}`}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Następne</span>
        </a>
      </div>
    );
  }
}

export default Carousel;