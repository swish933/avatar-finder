import React from "react";
import Card from "./Card";

class CardArray extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return (
            <Card key={i} name={user.name} email={user.email} id={user.id} />
          );
        })}
      </div>
    );
  }
}

export default CardArray;
