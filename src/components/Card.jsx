import React from "react";
import Description from "./Description";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Description info={props.tel} />
        <Description info={props.email} />
      </div>
    </div>
  );
}

export default Card;
