import Wrapper from "../../components/Wrapper";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import one from "../../components/asset/one.png";
import two from "../../components/asset/two.png";
import three from "../../components/asset/three.png";

export const Tech = () => {
  const nav = [
    { id: 0, name: 1, link: "vehicle" },
    { id: 1, name: 2, link: "port" },
    { id: 2, name: 3, link: "capsule" },
  ];

  let location = useLocation().pathname.split("/")[2];

  let img;

  switch (location) {
    case "vehicle":
      img = one;
      break;
    case "port":
      img = two;
      break;
    case "capsule":
      img = three;
      break;
    default:
      break;
  }

  return (
    <div className="w-screen bg-dark text-light bg-tech bg-cover bg-center bg-no-repeat">
      <Wrapper>
        <div className="grid md:justify-between gap-10 md:gap-0 md:h-[80%] h-full">
          <h2 className="font-barlow_cond tracking-tight text-4xl font-thin text-center md:text-left">
            <span className="pr-4 font-normal text-gray-500">01</span>SPACE
            LAUNCH 101
          </h2>

          <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:gap-10 md:h-full">
            <div className="md:order-last order-none md:h-full md:w-[50%] w-screen mb-5 self-end">
              <img
                className="aspect-video md:aspect-auto object-cover object-bottom md:object-center"
                src={img}
                width={"100%"}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:w-[60%] h-full md:gap-10">
              <nav className="flex md:flex-col gap-5 mb-5 md:mb-10">
                {nav.map((el) => (
                  <NavLink
                    key={el.id}
                    to={el.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "flex justify-center items-center w-[35px] aspect-square md:w-[50px] rounded-full bg-white text-dark"
                        : "flex justify-center items-center w-[35px] aspect-square md:w-[50px] rounded-full bg-transparent text-white border border-gray-500"
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
