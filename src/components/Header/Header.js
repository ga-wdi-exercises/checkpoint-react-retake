import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div>
                <header> 
                    <h1>NewContact</h1>
                    <nav> 
                  
                        <Link to="/"><h1>Home</h1></Link> 
                       <Link to="/new-contact"><nav>New Contact</nav></Link>
                    
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;