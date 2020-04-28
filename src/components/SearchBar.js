import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="d-flex justify-content-center w-100 bg-secondary slide-up-fade-in" style={{animationDelay: "0.2s"}}>
              <input type="text" className="form-control m-2 ml-5 rounded-0" placeholder="Enter Keywords to Search"/>
              <button className="btn btn-dark m-2 mr-5 rounded-0">Search</button>
      </form>
    );
  }
}

export default SearchBar;
