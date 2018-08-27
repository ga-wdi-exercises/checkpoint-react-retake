import React, { Component } from "react";
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import Header from "../Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        {/* <p>app</p> */}
        <Header />

        <main>
          <Route path="/" component={ContactList} />
          <Route path="/new-contact" component={NewContact} />
        </main>
      </div>
    );
  }
}

export default App;
