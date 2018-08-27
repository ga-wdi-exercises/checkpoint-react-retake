import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={this.props.profile_picture} />
                <h2></h2>
                <h3></h3>
                <h4></h4>
            </div>
        )
    }
}

export default Contact
