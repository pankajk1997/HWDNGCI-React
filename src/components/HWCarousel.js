import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class HWCarousel extends Component {
  render() {
    return (
      <div className="slide-up-fade-in" style={{animationDelay: "0.8s"}}>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} swipeable={true} centerMode={true} centerSlidePercentage={90} emulateTouch={true}>
          <div>
              <img src="https://i.imgur.com/taQhe81.jpg" alt="Honeywell Aerospace Carousel 1"/>
          </div>
          <div>
              <img src="https://i.imgur.com/dKXl1l7.jpg" alt="Honeywell Aerospace Carousel 2"/>
          </div>
          <div>
              <img src="https://i.imgur.com/kal4ZtY.jpg" alt="Honeywell Aerospace Carousel 3"/>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HWCarousel;
