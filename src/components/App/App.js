import React, { Component } from "react";
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import { Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      contacts: this.props.contacts
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
        <Route path="/" exact render={(props) => <ContactList data={this.props.contacts} {...props}/>} /> 
        </main>
      </div>
    );
  }
}

export default App;
