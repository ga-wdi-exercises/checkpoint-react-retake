import React, { Component } from "react";
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import { Route } from 'react-router-dom'
import Header from '../Header/Header.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <p>app</p>
        <Header />
        <Route path= "/" render={(routerProps) => <ContactList {...this.state} {...routerProps}/>} />
        <Route path= "/new-contact" render={(routerProps) => <NewContact {...this.state}{...routerProps}/>} />
          
      </div>
    );
  }
}

export default App;
