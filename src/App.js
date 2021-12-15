import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      message: "",
      role: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3005/notes").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  change = (event) => {
    this.setState({
      inputData: {...this.state.inputData,[event.target.name]: event.target.
        value },
    });
  };

  showPopupHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopup: true,
    });
  };

  postHandler = () => {
    axios
      .post("http://localhost:3005/notes", this.state.inputData)
      .then((res) => { 
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  render () {
    return (
      <div>
        <Header />
        <div className="form_area">
          <Form change={this.change} submit={this.showPopupHandler} />
          <View {...this.state.inputData} />
        </div>
        {this.state.showPopup && <Popup {...this.state.inputData} post={this.postHandler} />}
        {this.state.data.map((note) => (
          <Notes {...note} key={note.id} />
        ))}
        <Footer />
      </div>
    );
  };
};

export default App;
