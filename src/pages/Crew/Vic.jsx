import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import vic from "../../components/asset/vic.png";
import { Crews } from "../../components/Crews";
Crews;

export const Vic = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <Crews
                img={vic}
                txt="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                name="Victor Glover"
                title="Pilot "
              />
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
