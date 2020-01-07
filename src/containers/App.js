import React, { Component } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardArray from "../components/CardArray";
import ErrorBoundary from "../components/ErrorBoundary";
import "../index.css";
import "../containers/App.css";
import { connect } from "react-redux";
import { setSearchField, requestUsers } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestUsers: () => {
      dispatch(requestUsers());
    }
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {
    const { searchField, onSearchChange, users } = this.props;
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
