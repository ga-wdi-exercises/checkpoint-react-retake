import React, { Component } from "react";
import { React, Link, Switch } from "react-router-dom";
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return ( 
    <Header>
      <div className="App">
        <p>app</p>
      </div>
    <Header/>
      <main>
      <Route path = "/" render={() => <ContactList contacts={this.state.contacts}/>}/>
      <Route path = "/new-contact" render = {(props) => <NewContact addContact = {this.addContact}/>}/>
      </main>
      </div> 
    );
  }
}

export default App;
