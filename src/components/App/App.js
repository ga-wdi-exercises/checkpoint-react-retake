import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'

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
        <p>app</p>
        <Route path='/'
          render={<ContactList contacts={this.state.contacts}/>}
        />
        <Route path='/new-contact' render={<NewContact />}/>
        <Header />
      </div>
    );
  }
}

export default App;
