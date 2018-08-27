import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: this.props.contacts
        }
    }
    render() {
        return (
            <div className="contact">
                <img src={this.props.profile_picture} />
                <h2 src={this.props.name} />
                <h3 src={this.props.email} />
                <h4 src={this.props.super_power} />
            </div>
        )
    }
}

export default Contact
