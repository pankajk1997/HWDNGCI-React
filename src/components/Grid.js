import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="grid-container slide-up-fade-in" style={{animationDelay: "1s"}}>
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>  
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>  
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
        </div>
      </div>
    );
  }
}

export default Grid;
