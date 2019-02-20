import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type='text' value='name'></input>
          <input type='text' value='email'></input>
          <input type='text' value='profile_picture'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewContact;