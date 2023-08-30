import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import mark from "../../components/asset/mark.png";

import { Crews } from "../../components/Crews";
import { Crew_nav } from "./Crew_nav";

export const Mark = () => {
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
                title="MISSION SPECIALIST"
                name="MARK SHUTTLEWORTH"
                text="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                img={mark}
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
