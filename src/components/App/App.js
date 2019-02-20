import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Redirect } from 'react-router-dom'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  render() {
    console.log(this.props.contacts)
    return (
      <Router>
      <div className="App">
        <Header />

        <Route exact path='/' render={contacts => <ContactList contacts={this.props.contacts}/>}/>
        <Route exact path='/new-contact' render={ () => <NewContact />}/>
      </div>
      </Router>
    );
  }
}

export default App;
