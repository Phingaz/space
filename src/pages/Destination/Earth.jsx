import "../Destination.scss";
import Wrapper from "../../components/Wrapper";
import moon from "../../components/asset/moon.png";
import { Planet } from "../../components/Planet";
import { Mini_nav } from "../../components/Mini_nav";

export const Earth = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="destination">
              <h1>
                <span>01</span> Pick your destination
              </h1>
              <Planet
                img={moon}
                title={`moon`}
                txt="See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by
                visiting the Luna 2 and Apollo 11 landing sites."
                distance={`384,400 km`}
                time={`3 DAYS`}
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
