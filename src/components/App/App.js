import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts,
      contactList: []
    };
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <h1>Contacts</h1>
        <Header/>
        <Switch>

        <Route exact path="/" render={() => {
          return (
            <ContactList datalist={this.state.contacts}/>
          )
        }
        } />

         <Route exact path="/new-contact" render={() => {
          return (
            <NewContact/>
          )
        }
        } />
        </Switch>
             </div>
    );
  }
}

export default App;
