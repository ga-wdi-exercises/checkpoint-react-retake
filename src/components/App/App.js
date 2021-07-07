import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: this.props.contacts
    }
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <main>
          <Route
            path='/'
            render={routerProps => (
              <ContactList {...routerProps} {...this.state} />
            )}
          />
          <Route
            path='/new-contact'
            component={NewContact}
          />
        </main>
      </div>
    )
  }
}

export default App
