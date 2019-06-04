import React, { Component } from "react";

class Contact extends Component {
    render() {
        return(
            <div className="contact">
            <img src={this.props.profile_picture} alt=""/>
            <h2>{this.props.name}</h2>
            <h3>{this.props.email}</h3>
            <h4>{this.props.super_power}</h4>
            </div>
        )
    }
}

export default Contact;
