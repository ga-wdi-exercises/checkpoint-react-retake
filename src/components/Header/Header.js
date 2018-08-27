import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <header>
          <h1>Justic League Contacts</h1>
          <nav>
            <Link to='/'>Contact List</Link>
            <Link to='/new-contact'>New Contact</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
