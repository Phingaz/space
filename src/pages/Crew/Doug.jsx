import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import doug from "../../components/asset/doug.png";
import { Crews } from "../../components/Crews";
Crews;

export const Doug = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <Crews
                img={doug}
                txt=" Douglas Gerald Hurley is an American engineer, former
          Marine Corps pilot and former NASA astronaut. He launched
          into space for the third time as commander of Crew Dragon
          Demo-2."
                name=" Douglas Hurley"
                title="commander"
              />
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
