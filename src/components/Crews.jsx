/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export const Crews = (props) => {
  return (
    <div className="section">
    <div className="text">
      <div className="heading">
        <h1>
          <span>02</span> Meet your crew
        </h1>
      </div>
      <div className="info">
        <h1>
          <span>
            {props.title}
            <br />
          </span>
         {props.name}
        </h1>
        <p>
         {props.txt}
        </p>
        <nav className="nav">
          <NavLink
            to="/crew/doug"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "nav_link"
            }
          >
          </NavLink>
          <NavLink
            to="/crew/mark"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "nav_link"
            }
          >
          </NavLink>
          <NavLink
            to="/crew/vic"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "nav_link"
            }
          >
          </NavLink>
          <NavLink
            to="/crew/ans"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "nav_link"
            }
          >
          </NavLink>
        </nav>
      </div>
    </div>
    <div className="img">
      <img src={props.img} />
    </div>
  </div>
  )
}
