import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import contacts from "../../contacts.json";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/">
          <ContactList />
        </Route>
        <p>app</p>
      </div>
    );
  }
}

export default App;
