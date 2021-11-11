import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";


class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    message: "",
    role: "",
    showPopup: false,
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showPopupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true,
    });
  };

  render () {
    const props = {
      first: this.state.firstname,
      last: this.state.lastname,
      phone: this.state.phone,
      message: this.state.message,
      role: this.state.role,
    };

    return (
      <div>
        <Header />
        <Form change={this.change} showPopupHandler={this.showPopupHandler} />
        <View {...props} />
        {this.state.showPopup && <Popup {...props} />}
      </div>
    );
  };
};

export default App;
