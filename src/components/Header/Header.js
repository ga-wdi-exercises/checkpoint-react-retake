import React, { Component } from 'react';
import { 
  Link,
  BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
    <Router>
      <div>
        <header>
          <h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/new-contact'>New Contact</Link>
            </nav>
          </h1>
        </header>
      </div>
    </Router>
    );
  }
}

export default Header;