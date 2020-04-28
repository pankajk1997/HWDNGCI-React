import React, { Component } from 'react';

class Contribute extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid p-5 slide-up-fade-in" style={{animationDelay: "0.2s", backgroundColor: "rgb(243, 243, 243)"}}>
          <div className="p-5 bg-white w-100">
              Submit the link having competitive intelligent information below:
              <br/>
              (You can submit homepage of your website and the tool will consider all the webpages)
          </div>
          <form className="d-flex justify-content-center mt-2 bg-secondary slide-up-fade-in" style={{animationDelay: "0.2s"}}>
                <input type="text" className="form-control m-2 rounded-0" placeholder="Enter the link of your website"/>
                <button type="submit" className="btn btn-dark m-2 rounded-0">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contribute;
