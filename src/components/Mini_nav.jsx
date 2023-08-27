import { NavLink } from "react-router-dom";
import styled from "./Mini_Nav.module.css";


export const Mini_nav = () => {
  return (
    <nav className={styled.nav}>
    <NavLink
      to="/destination/earth"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    >
      HOME
    </NavLink>
    <NavLink
      to="/destination/mars"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    >
      MARS
    </NavLink>
  </nav>
  )
}
