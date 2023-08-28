import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import ans from "../../components/asset/ans.png";
import { Crews } from "../../components/Crews";
Crews;

export const Ans = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <Crews
                img={ans}
                txt="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                name="Anousheh Ansari"
                title="Flight Engineer"
              />
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
