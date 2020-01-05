import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="pa2 mb3">
        <input
          className="pa3 ba b--light-green bg-light-blue"
          placeholder="Search Robot"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}
