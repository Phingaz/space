import "./Destination.scss";
import Wrapper from "../../components/Wrapper";
import titan from "../../components/asset/titan.png";
import { Planet } from "../../components/Planet";
import { Mini_nav } from "./Mini_nav";

export const Titan = () => {
  return (
    <div className="wrapper_destination">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="destination">
              <div className="heading">
                <h1>
                  <span>01</span> Pick your destination
                </h1>
              </div>
              <Planet
                img={titan}
                title="titan"
                txt="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                distance='1.6 BIL. km'
                time='7 years'
              >
                <Mini_nav />
              </Planet>
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
