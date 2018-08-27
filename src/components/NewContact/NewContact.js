import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
            Email:
            <input type="text" name="email" />
            Profile Picture:
            <input type="text" name="profile-picture" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NewContact;
