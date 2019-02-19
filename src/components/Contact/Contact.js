// Your <Contact> component will render a single contact. It should contain an outer <div> with a class of contact and include an <img> for the profile picture, <h2> for the name, <h3> for the email address, and <h4> for the super power.

import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src=""></img>
                <h2></h2>
                <h3></h3>
                <h4></h4>
            </div>
        );
    }
}

export default Contact;