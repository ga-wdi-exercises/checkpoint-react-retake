import React, { Component } from 'react'

class NewContact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form onSubmit={this.submit}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="image" name="image" placeholder="Link to profile picture" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewContact