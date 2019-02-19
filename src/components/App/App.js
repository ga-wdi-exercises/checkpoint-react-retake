import React, { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'

class App extends Component {


  constructor (props) {
    super(props)
    this.state = {
     contacts: this.props.contacts
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/new-contact" render={(routerProps)=><NewContact contacts={this.state.contacts} {...routerProps} {...this.state} />} />
          
          <Route path="/" render={(routerProps)=><ContactList contacts={this.state.contacts} {...routerProps} {...this.state} />}  />
        </Switch>
      </div>
    );
  }
}

export default App;
