import React, { Component } from "react";
// import ContactList from "../ContactList/ContactList";
// import NewContact from "../NewContact/NewContact";
// import Header from "../Header/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
