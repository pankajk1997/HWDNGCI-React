import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContentContextProvider extends Component {
  
  prev={};

  state = {
    Content : "Home"
  };

  changeContent1 = () => {
    this.setState(prevState => {
      this.prev=prevState;
      return {
        Content: "Home"
      };
    });
  };

  changeContent2 = () => {
    this.setState(prevState => {
      this.prev=prevState;
      return {
        Content: "Contribute"
      };
    });
  };

  changeContent3 = () => {
    window.scrollTo({
      top: 999999999999
    });
    this.setState(prevState => {
      this.prev=prevState;
      return {
        Content: "About"
      };
    });
  };

  changeContent4 = () => {
    this.setState(prevState => {
      this.prev=prevState;
      return {
        Content: "Donate"
      };
    });
  };

  render() {
    return (
          <Provider value={{ Content: this.state.Content, changeContent1: this.changeContent1, changeContent2: this.changeContent2, changeContent3: this.changeContent3, changeContent4: this.changeContent4 }}>
            {this.props.children}
          </Provider>
    );
  }
}

export { ContentContextProvider, Consumer as ContentContextConsumer };
