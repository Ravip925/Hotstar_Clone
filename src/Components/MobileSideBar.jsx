import {
  KeyboardArrowRightRounded,
  Monitor,
  TheaterComedy,
  Translate,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import "./MobileSideBar.css";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  margin-top: 30px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  position: relative;
  ${tablet({
    marginTop: "15%",
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  display: flex;
  flex-direction: column;
  ${tablet({
    height: "35vh",
  })}
`;

const MobileSideBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const toggleClass = toggle ? "active" : null;

  document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
      setToggle(false);
    }
  };
  return (
    <>
      <nav className="mobile_nav">
        <div className="nav">
          <div onClick={handleToggle} id="toggle" className={toggleClass}></div>
          <div id="sidebar" className={toggleClass}>
            <Container>
              <Wrapper style={{ height: "10vh" }}>
                <h3>Log in</h3>
                <p>For a better experience</p>
                <span className="arrow">
                  <KeyboardArrowRightRounded />
                </span>
              </Wrapper>

              <Wrapper style={{ height: "6vh" }}>
                <h4>Watchlist</h4>
              </Wrapper>

              <Wrapper>
                <div className="check">
                  <div></div>
                  <div>
                    <input type="checkbox" id="switch" />
                    <label htmlFor="switch"></label>
                  </div>
                </div>
                <div className="category">
                  <ol>
                    <li>
                      <p className="icons">
                        <Monitor sx={{ fontSize: "1.2em" }} />
                      </p>{" "}
                      Channels
                    </li>
                    <li>
                      <p className="icons">
                        <Translate sx={{ fontSize: "1.2em" }} />
                      </p>{" "}
                      Languages
                    </li>
                    <li>
                      <p className="icons">
                        <TheaterComedy sx={{ fontSize: "1.2em" }} />
                      </p>{" "}
                      Genres
                    </li>
                  </ol>
                </div>
              </Wrapper>
              <hr className="hr1" />
              <hr className="hr2" />
            </Container>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileSideBar;
