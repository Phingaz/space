import { NavLink } from "react-router-dom";
import styled from "./Header.module.css";
import logo from "./asset/logo.png";
import { useState } from "react";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const shoNa = () => {
    setSh((p) => !p);
  };
  return (
    <header className={styled.header}>
      <img src={logo} alt="logo" />

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <nav className={`${styled.nav} ${sh ? styled.open : styled.closed}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? styled.pending
              : isActive
              ? styled.active
              : styled.nav_link
          }
        >
          <div className={styled.nav_item}>
            <span>00</span>
            HOME
          </div>
        </NavLink>

        <NavLink
          to="/destinaion"
          className={({ isActive, isPending }) =>
            isPending
              ? styled.pending
              : isActive
              ? styled.active
              : styled.nav_link
          }
        >
          <div className={styled.nav_item}>
            <span>01</span>
            DESTINATION
          </div>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive, isPending }) =>
            isPending
              ? styled.pending
              : isActive
              ? styled.active
              : styled.nav_link
          }
        >
          <div className={styled.nav_item}>
            <span>02</span>
            CREW
          </div>
        </NavLink>

        <NavLink
          to="/tecnology"
          className={({ isActive, isPending }) =>
            isPending
              ? styled.pending
              : isActive
              ? styled.active
              : styled.nav_link
          }
        >
          <div className={styled.nav_item}>
            <span>04</span>
            TECHNOLOGY
          </div>
        </NavLink>
      </nav>
    </header>
  );
};
