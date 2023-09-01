import Wrapper from "../../components/Wrapper";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import moon from "../../components/asset/moon.png";
import mars from "../../components/asset/mars.png";
import europa from "../../components/asset/europa.png";
import titan from "../../components/asset/titan.png";

export const Tech = () => {
  const nav = [
    { id: 0, name: "one", link: "one" },
    { id: 1, name: "two", link: "two" },
    { id: 2, name: "three", link: "three" },
  ];

  let location = useLocation().pathname.split("/")[2];

  let img;

  switch (location) {
    case "moon":
      img = moon;
      break;
    case "mars":
      img = mars;
      break;
    case "europa":
      img = europa;
      break;
    case "titan":
      img = titan;
      break;

    default:
      break;
  }

  return (
    <div className="h-[100svh] w-screen bg-dark text-light bg-tech bg-cover bg-center bg-no-repeat">
      <Wrapper>
        <div className="flex flex-col md:justify-between gap-10 md:gap-0 md:h-[80%] h-full">
          <h2 className="font-barlow_cond tracking-tight text-4xl font-thin text-center md:text-left">
            <span className="pr-4 font-normal text-gray-500">01</span>SPACE
            LAUNCH 101
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-center items-center md:gap-10">
            <div className="h-full w-[50%]">
              <img src={img} width={"100%"} />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start w-full md:w-6/12 h-full">
              <nav className="flex gap-5 mb-5 md:mb-10">
                {nav.map((el) => (
                  <NavLink
                    key={el.id}
                    to={el.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "pb-2 font-barlow_cond uppercase font-thin text-lg text-white border-b-4 border-white"
                        : "pb-2 font-barlow_cond uppercase font-thin text-lg text-alt hover:border-b-4 transition-f"
                    }
                  >
                    {el.name}
                  </NavLink>
                ))}
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
