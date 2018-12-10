import React, { Component } from "react";
import { Route } from "react-router";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

import Header from "../Header/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          render={() => <ContactList contacts={this.state.contacts} />}
        />
        <Route path="/new-contact" component={NewContact} />
      </div>
    );
  }
}

export default App;
