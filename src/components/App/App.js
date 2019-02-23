import React, { Component } from "react";
import Header from './../Header/Header'
import { Route } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
    <Route path='/' exact render={() => <ContactList contacts={this.state.contacts}/> } />
    <Route path='/new-contact' render={() => <NewContact /> } />
      </div>
    );
  }
}

export default App;
