import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name">Name</input>
                    <input type="text" name="email">Email</input>
                    <input type="text" name="profile_picture">Image</input>
                    <input type="text" name="super_power">Super Power</input>

                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewContact;