import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import doug from "../../components/asset/doug.png";
import { NavLink } from "react-router-dom";

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
              <div className="section">
                <div className="info">
                  <h2>Commander</h2>
                  <h1>Douglas Hurley</h1>
                  <p>
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2.
                  </p>
                </div>

                <div className="img">
                  <img src={doug} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
