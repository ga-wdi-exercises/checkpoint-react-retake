


import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./Contact";
import ContactList from "./ContactList";
import Header from "./Header";
import NewContact from "./NewContact/NewContact";


class App extends Component {
  constructor() {
    super();

    this.state = {
      // where contacts is the array of contacts from contacts.json
    contacts: this.props.contacts
    };


  }
  render() {
    return (
      <div className="App">
        <p>app</p>
      </div>
    );
  }
}

export default App;
