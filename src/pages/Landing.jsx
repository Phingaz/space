import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

export const Landing = () => {

  return (
    <div className="h-[100svh] w-screen bg-dark text-light bg-landing bg-cover bg-center bg-no-repeat">
      <Wrapper>
        <div className="flex justify-center items-center w-full h-[calc(100svh-80px)]">
          <div className="flex flex-col md:flex-row justify-between items-center h-full text-center md:text-left">
            <div className="flex flex-col md:w-6/12">
              <div className="mb-10">
                <h2 className="md:text-3xl text-lg text-alt font-barlow_cond font-thin uppercase mb-5">
                  So, You want to travel to
                </h2>
                <h1 className="uppercase font-bellefair font-thin text-7xl md:text-9xl">
                  Space
                </h1>
              </div>
              <p className="text-alt font-barlow leading-7">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="flex flex-1 justify-center items-center h-full w-full md:w-6/12">
              <Link className="flex justify-center items-center bg-white w-6/12 aspect-square font-bellefair font-thin text-5xl rounded-full text-dark cursor-pointer transition-f hover:box-sd" to="/destination">Explore</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
