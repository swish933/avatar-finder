import React from "react";

class Card extends React.Component {
  render() {
    const { name, email, id } = this.props;
    return (
      <div className="bg-light-green card dib ma2 pa3 grow">
        <img alt="usrimg" src={`https://robohash.org/${id * 54}?set=set5`} />
        <div>
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
