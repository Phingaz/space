import "./Destination.scss";
import Wrapper from "../components/Wrapper";
import moon from "../components/asset/moon.png";
import { NavLink } from "react-router-dom";
import styled from "./Mini_Nav.module.css";

export const Destination = () => {
  return (
    <div className="wrapper">
      <Wrapper>
        <div className="container">
          <div className="container__wrapper">
            <main className="destination">
              <h1>
                <span>01</span> Pick your destination
              </h1>

              <div className="section">
                <img src={moon} />
                <div>
                  <nav>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? styled.pending
                          : isActive
                          ? styled.active
                          : styled.nav_link
                      }
                    >
                      <div className={styled.nav_item}>
                        <span>00</span>
                        HOME
                      </div>
                    </NavLink>
                  </nav>
                  <h1>Moon</h1>
                  <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </p>
                  <hr />
                  <div>
                    <div>
                      <h6>AVG. DISTANCE</h6>
                      <h4>384,400 km</h4>
                    </div>
                    <div>
                      <h6>AVG. DISTANCE</h6>
                      <h4>384,400 km</h4>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
