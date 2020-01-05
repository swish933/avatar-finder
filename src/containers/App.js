import React, { Component } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardArray from "../components/CardArray";
import "../index.css";
import "../containers/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter(user => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.users.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>RobotFinder</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardArray users={filteredUsers} />
          </Scroll>
        </div>
      );
    }
  }
}
