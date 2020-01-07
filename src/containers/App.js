import React, { Component } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardArray from "../components/CardArray";
import ErrorBoundary from "../components/ErrorBoundary";
import "../index.css";
import "../containers/App.css";
import { connect } from "react-redux";
import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchUsers.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value));
    }
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    const { users } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !users.length ? (
      <h1 className="tc">Loading</h1>
    ) : (
      <div className="tc">
        <h1>AvatarFinder</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardArray users={filteredUsers} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
