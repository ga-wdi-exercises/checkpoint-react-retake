// Your <NewContact> component should render an <h1> with a text of New Contact and a form with inputs for the name, email and profile_picture.

// When submitted, you should save the new contact by updating your state inside of <App> and direct the user back to the homepage/list of contacts.

import React, { Component } from 'react';

class NewContact extends Component {

    constructor() {
        super();
        this.state = {
        name: '',
        email: '',
        profile_picture: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    onSubmit = (e) => {
    e.preventDefault();
    const { name, email, profile_picture } = this.state;
    }


    render() {
        const { name, email, profile_picture } = this.state
        return (
            <div>
                <h1></h1>
                <form onSubmit={this.onSubmit}>
                <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="profile_picture"
              value={profile_picture}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewContact;