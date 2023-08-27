import "./Landing.scss";
import Wrapper from "../components/Wrapper";
import { NavLink } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="main">
              <div className="text">
                  <h2>SO, YOU WANT TO TRAVEL TO</h2>
                  <h1>SPACE</h1>
                  <p>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                  </p>
              </div>
              <NavLink to="/destination/moon">Explore</NavLink>
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
