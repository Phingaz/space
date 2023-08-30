import { NavLink } from "react-router-dom";
import styled from "./Crew_nav.module.css";

export const Crew_nav = () => {
  return (
    <nav className={styled.nav}>
    <NavLink
      to="/crew/doug"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    ></NavLink>
    <NavLink
      to="/crew/mark"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    ></NavLink>
    <NavLink
      to="/crew/vic"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    ></NavLink>
    <NavLink
      to="/crew/ans"
      className={({ isActive, isPending }) =>
        isPending
          ? styled.pending
          : isActive
          ? styled.active
          : styled.nav_link
      }
    ></NavLink>
  </nav>
  )
}
