import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import doug from "../../components/asset/doug.png";

import { Crews } from "../../components/Crews";
import { Crew_nav } from "./Crew_nav";

export const Doug = () => {
  return (
    <div className="crew_wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <div className="heading">
                <h1>
                  <span>02</span>Meet your crew
                </h1>
              </div>
              <Crews
                title="Commander"
                name="Douglas Hurley"
                text="Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into
                space for the third time as commander of Crew Dragon Demo-2."
                img={doug}
              >
                <Crew_nav />
              </Crews>
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
