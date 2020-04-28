import React, { Component } from 'react';

class Donate extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column slide-up-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="grid-item"><a href="https://www.paypal.com/paypalme2/pankajk2526"><img src="https://i.imgur.com/WO2Sdic.png" alt="paypal" style={{height: "100px", width: "225px"}}/></a></div>
          <div className="grid-item"><a href="https://rzp.io/i/pouZjPZ"><img src="https://i.imgur.com/5zaxByU.png" alt="razorpay" style={{height: "80px", width: "200px"}}/></a></div>
        </div>
      </div>
    );
  }
}

export default Donate;
