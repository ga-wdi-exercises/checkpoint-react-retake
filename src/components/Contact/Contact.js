import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className='contact'>
                <img src={this.props.profile_picture} alt = ""></img>
                <h2>{this.props.name}</h2>
                <h3>{this.props.email}</h3>
                <h4>{this.props.super_power}</h4>
                </div>
            </div>
        );
    }
}

export default Contact;