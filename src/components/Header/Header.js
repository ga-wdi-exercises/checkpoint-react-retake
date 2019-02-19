import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList'
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div>
        <h1>Justice League Friends List</h1>
        <div className="nav-item"><Link to="/"><ContactList /></Link></div>
      </div>
    );
  }
}

export default Header;