import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <div id="about" className="container-new slide-up-fade-in" style={{animationDelay: "1.2s"}}>
              <div className="tag">
              <div style={{fontSize: "2vw", padding: "2%"}}>
                      About Us
                      <br />
                      <br />
                      Understanding competitive information and technology trends is vital to make our products differentiated and more useful to our customers. The tool is an attempt to improve the existing ad-hoc method of collecting, analyzing and sharing of information manually. This project was a part of green belt certification program within honeywell.
                      <br/>
                      <br/>
                      Honeywell Campus II, RMZ Ecoworld
                      <br/>
                      Adarsh Palm Retreat, Bellandur
                      <br/>
                      Bangalore, India - 560103
                      <br/>
                      <div className="d-flex flex-inline justify-content-center mt-4">
                            <a href="https://aerospace.honeywell.com/en"><img src="https://i.imgur.com/jE4sgGj.png?1" alt="official" className="icon-1"/></a>
                            <a href="https://www.facebook.com/HoneywellAero"><img src="https://i.imgur.com/DqY7nnO.png" alt="facebook" className="icon-1"/></a>
                            <a href="https://instagram.com/honeywell_aero/"><img src="https://i.imgur.com/TEfZehk.png" alt="instagram" className="icon-1"/></a>
                            <a href="https://www.linkedin.com/company/honeywell-aerospace"><img src="https://i.imgur.com/cBPstTD.png" alt="linkedin" className="icon-1"/></a>
                            <a href="https://twitter.com/honeywell_aero"><img src="https://i.imgur.com/o825HE6.png" alt="twitter" className="icon-1"/></a>
                      </div>
              </div>
              </div>
              <img src="https://i.imgur.com/nM2U1Dz.jpg" alt="campus-II" className="w-100"/>
        </div>
      </div>
    );
  }
}

export default About;
