import "./Destination.scss";
import Wrapper from "../../components/Wrapper";
import europa from "../../components/asset/europa.png";
import { Planet } from "../../components/Planet";
import { Mini_nav } from "./Mini_nav"

export const Europa = () => {
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
                img={europa}
                title="Euroa"
                txt="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                distance='628 MIL. km'
                time='3 years'
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
