import styled from "./Header.module.css";
import logo from "./asset/logo.png";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [sh, setSh] = useState(false);

  const links = [
    { title: "Home", number: 0, link: "/" },
    { title: "Destination", number: 1, link: "/destination" },
    { title: "Crew", number: 2, link: "/crew" },
    { title: "Technology", number: 3, link: "/tech" },
  ];

  const shoNa = () => {
    setSh((p) => !p);
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.split("/").length <= 2 &&
      location.pathname.split("/").includes("destination")
    ) {
      navigate("/destination/moon");
    }
    if (
      location.pathname.split("/").length <= 2 &&
      location.pathname.split("/").includes("crew")
    ) {
      navigate("/crew/doug");
    }
    if (
      location.pathname.split("/").length <= 2 &&
      location.pathname.split("/").includes("tech")
    ) {
      navigate("/tech/vehicle");
    }
  }, [location, navigate]);

  return (
    <header className={styled.header}>
      <a href="/">
        <img src={logo} width={"40px"} />
      </a>

      <button
        onClick={shoNa}
        className={`${styled.nav_btn} ${sh && styled.openb}`}
      >
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
        <span className={styled.ham}></span>
      </button>

      <ul
        className={`flex flex-col h-full md:flex-row md:justify-center md:items-center gap-5 md:bg-transparent font-barlow_cond ${
          styled.nav
        } ${sh ? styled.open : styled.closed}`}
      >
        {links.map((el, i) => (
          <li key={i} className="cursor-pointer transition-f">
            <NavLink
              to={el.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "font-semibold border-b-4 pb-2 tracking-wider"
                  : "font-semibold pb-2 tracking-wider hover:border-b-4 transition-f"
              }
            >
              0{el.number}
              <span className="ml-1 uppercase font-light tracking-widest">
                {el.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};
