import "../Destination.scss";
import Wrapper from "../../components/Wrapper";
import moon from "../../components/asset/moon.png";
import { Planet } from "../../components/Planet";
import { Mini_nav } from "../../components/Mini_nav";

export const Mars = () => {
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
                title={`mars`}
                txt="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                distance={`225 Mil km`}
                time={`9 months`}
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
