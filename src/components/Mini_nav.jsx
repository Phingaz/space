import { NavLink } from "react-router-dom";
import styled from "./Mini_Nav.module.css";


export const Mini_nav = () => {
  return (
    <nav className={styled.nav}>
    <NavLink
      to="/destination/moon"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    >
      MOON
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
    <NavLink
      to="/destination/europa"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    >
      EUROPA
    </NavLink>
    <NavLink
      to="/destination/titan"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    >
      TITAN
    </NavLink>
  </nav>
  )
}
