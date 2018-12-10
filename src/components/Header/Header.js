import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Phone Book</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New Contact</Link>
        </nav>
      </header>
    );
  }
}
