/* eslint-disable react/prop-types */

export const Planet = (props) => {
  return (
    <div className="section">
      <div className="img">
        <img src={props.img} />
      </div>

      <div className="info">
        {props.children}
        <h1>{props.title}</h1>
        <p>{props.txt}</p>
        <hr />
        <div className="km">
          <div className="km__one">
            <h6>AVG. DISTANCE</h6>
            <h4>{props.distance}</h4>
          </div>
          <div className="km__two">
            <h6>EST. TRAVEL TIME</h6>
            <h4>{props.time}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
