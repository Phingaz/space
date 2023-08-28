import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import mark from "../../components/asset/mark.png";
import { Crews } from "../../components/Crews";
Crews;

export const Mark = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <Crews
                img={mark}
                txt="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                name="MARK SHUTTLEWORTH"
                title="Mission Specialist "
              />
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
