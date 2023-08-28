import "./Crew.scss";
import Wrapper from "../../components/Wrapper";
import doug from "../../components/asset/doug.png";
import { NavLink } from "react-router-dom";

export const Doug = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="crew">
              <div className="section">
                <div className="text">
                  <div className="heading">
                    <h1>
                      <span>02</span> Meet your crew
                    </h1>
                  </div>
                  <div className="info">
                    <h1>
                      <span>
                        commander
                        <br />
                      </span>
                      Douglas Hurley
                    </h1>
                    <p>
                      Douglas Gerald Hurley is an American engineer, former
                      Marine Corps pilot and former NASA astronaut. He launched
                      into space for the third time as commander of Crew Dragon
                      Demo-2.
                    </p>
                    <nav className="nav">
                      <NavLink
                        to="/crew/doug"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "active"
                            : "nav_link"
                        }
                      >
                      </NavLink>
                      <NavLink
                        to="/crew/mark"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "active"
                            : "nav_link"
                        }
                      >
                      </NavLink>
                    </nav>
                  </div>
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
