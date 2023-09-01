import Wrapper from "../../components/Wrapper";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import doug from "../../components/asset/doug.png";
import mark from "../../components/asset/mark.png";
import vic from "../../components/asset/vic.png";
import ans from "../../components/asset/ans.png";

export const Crew = () => {
  const nav = [
    { id: 0, name: "doug", link: "doug" },
    { id: 1, name: "makr", link: "mark" },
    { id: 2, name: "vic", link: "vic" },
    { id: 3, name: "ans", link: "ans" },
  ];

  let location = useLocation().pathname.split("/")[2];

  let img;

  switch (location) {
    case "doug":
      img = doug;
      break;
    case "mark":
      img = mark;
      break;
    case "vic":
      img = vic;
      break;
    case "ans":
      img = ans;
      break;

    default:
      break;
  }

  return (
    <div className="h-[100svh] w-screen bg-dark text-light bg-crew bg-cover bg-center bg-no-repeat">
      <Wrapper>
        <div className="flex flex-col md:justify-between gap-10 md:gap-0 md:h-[calc(100svh-80px)] h-full">
          <h2 className="font-barlow_cond tracking-tight text-4xl font-thin text-center md:text-left uppercase">
            <span className="pr-4 font-normal text-gray-500">02</span> Meet Your
            crew
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-center items-center md:gap-10 h-full">

            <div className="flex flex-col justify-between items-center md:items-start w-full md:w-6/12 md:h-[50%] md:mb-0 mb-10">
              <Outlet />
              <nav className="flex gap-5 md:mb-10">
                {nav.map((el) => (
                  <NavLink
                    key={el.id}
                    to={el.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "w-[10px] h-[10px] bg-white rounded-full"
                        : "w-[10px] h-[10px] bg-gray-500 rounded-full"
                    }
                  ></NavLink>
                ))}
              </nav>
            </div>

            <img
              src={img}
              className="border-b md:border-b-0 mb-5 md:mb-0 w-6/12 order-first md:order-none md:self-end object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
