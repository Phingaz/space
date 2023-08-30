import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import ans from "../../components/asset/ans.png";

import { Crews } from "../../components/Crews";
import { Crew_nav } from "./Crew_nav";

export const Ans = () => {
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
                title="Flight Engineer"
                name="Anousheh Ansari"
                text="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
                img={ans}
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
