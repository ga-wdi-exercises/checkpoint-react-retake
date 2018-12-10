import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constacts: this.props.contacts
    };
    this.setContacts = this.setContacts.bind(this);
  }
  render() {
    return (
      <div className="App">
        <p>app</p>
        <main>
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={ContactList} />
        </main>
      </div>
    );
  }
}

export default App;
