import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.submit}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Image</label>
          <input type="text" name="profile_picture" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewContact;
