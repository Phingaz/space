import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import vic from "../../components/asset/vic.png";

import { Crews } from "../../components/Crews";
import { Crew_nav } from "./Crew_nav";

export const Vic = () => {
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
                title="PILOT"
                name="Victor Glover"
                text="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                img={vic}
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
