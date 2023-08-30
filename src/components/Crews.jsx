/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const Crews = (props) => {
  return (
    <div className="section">
      <div className="info">
        <div>
          <h2>{props.title}</h2>
          <h1>{props.name}</h1>
          <p>{props.text}</p>
          {props.children}
        </div>
      </div>

      <img src={props.img} />
    </div>
  );
};
