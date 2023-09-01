import Wrapper from "../components/Wrapper";
import { NavLink, Outlet } from "react-router-dom";
import moon from "../components/asset/moon.png";

export const Landing = () => {
  const nav = [
    { id: 0, name: "moon", link: "moon" },
    { id: 1, name: "mars", link: "mars" },
    { id: 2, name: "europa", link: "europa" },
    { id: 3, name: "titan", link: "titan" },
  ];

  return (
    <div className="h-[100svh] w-screen bg-dark text-light bg-landing bg-cover bg-center bg-no-repeat">
      <Wrapper>
        <div className="flex justify-center items-center w-full h-[calc(100svh-80px)]">
          <div className="grid flex-col h-full"></div>
        </div>
      </Wrapper>
    </div>
  );
};
