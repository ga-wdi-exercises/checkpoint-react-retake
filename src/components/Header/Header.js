import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Header Name</h1>
                    <nav>
                        <Link to="/">Home Page</Link>
                        <Link to="/new-contact">Create New Contact</Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;