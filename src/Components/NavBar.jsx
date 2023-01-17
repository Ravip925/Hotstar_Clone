import { Monitor, Search, TheaterComedy, Translate } from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";
import MobileSideBar from "./MobileSideBar";
import "./NavBar.css";

const Container = styled.div`
  height: 80px;
  width: 100%;
  text-decoration: none;
  user-select: none;
  background-color: #0c111b;
  color: rgb(210, 210, 210);
  background-position: bottom;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  ${mobile({
    width: "100%",
    height: "60px",
  })}
  ${tablet({
    width: "100%",
    height: "80px",
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  margin-left: 2.4em;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  ${mobile({
    marginLeft: "0rem",
  })}
  ${tablet({
    marginLeft: "0rem",
  })}
`;

const Right = styled.div`
  height: 100%;
  margin-right: 25px;
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  ${mobile({
    marginRight: "0rem",
  })}
  ${tablet({
    marginRight: "0rem",
  })}
`;
const MenuItems = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  gap: 1.6rem;
  ${mobile({
    width: "100%",
  })}
  ${tablet({
    width: "100%",
  })}
`;
const List = styled.li`
  height: 100%;
  display: grid;
  place-content: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  text-rendering: auto;
  position: relative;
  &:hover {
    color: white;
    transition: 0.3s all;
  }
`;
const Image = styled.img`
  background-repeat: no-repeat;
`;

const NavBar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <MenuItems>
              <List className="menu">
                <div className="bars">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                <ul id="menu_nav" className="nav">
                  <li>
                    <p className="icon">
                      <Monitor sx={{ fontSize: "1.2em" }} />
                    </p>{" "}
                    Channels
                  </li>
                  <li>
                    <p className="icon">
                      <Translate sx={{ fontSize: "1.2em" }} />
                    </p>{" "}
                    Languages
                  </li>
                  <li>
                    <p className="icon">
                      <TheaterComedy sx={{ fontSize: "1.2em" }} />
                    </p>{" "}
                    Genres
                  </li>
                </ul>
              </List>
              <List>
                <Image
                  style={{ paddingBottom: "6px" }}
                  src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                ></Image>
              </List>
              <List id="tv" className="tv">
                TV
                <ul>
                  <li>Mood Mix</li>
                  <li>Other Shows</li>
                  <li>Hotstar Specials</li>
                  <li>Quix</li>
                  <li>Star Jalsha</li>
                  <li>Star Plus</li>
                  <li>Star Vijay</li>
                  <li>more...</li>
                </ul>
              </List>
              <List id="movies" className="movies">
                Movies
                <ul style={{ height: "400px", width: "100px" }}>
                  <li>Hindi</li>
                  <li>Marathi</li>
                  <li>English</li>
                  <li>Bengali</li>
                  <li>telugu</li>
                  <li>Tamil</li>
                  <li>Kannada</li>
                  <li>Korean</li>
                  <li>Malayalam</li>
                  <li>Odia</li>
                </ul>
              </List>
              <List id="sports" className="sports">
                Sports
                <ul style={{ height: "400px" }}>
                  <li>Cricket</li>
                  <li>Football</li>
                  <li>Hockey</li>
                  <li>Kabbadi</li>
                  <li>Tennis</li>
                  <li>Athletics</li>
                  <li>Formula E</li>
                  <li>Khelo India</li>
                  <li>Martial Arts</li>
                  <li>WWE</li>
                </ul>
              </List>
              <List id="disney">Disney+</List>
              <List id="kids">
                <Image
                  style={{ width: "40px", height: "15px", marginTop: "4px" }}
                  src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
                ></Image>
              </List>
            </MenuItems>
          </Left>
          <Right>
            <MenuItems style={{ gap: "0.8rem" }}>
              <List id="search">
                <input
                  type="text"
                  className="search-box"
                  placeholder="search"
                />
                <Search
                  style={{
                    width: "17px",
                    height: "17px",
                    position: "absolute",
                    top: "30px",
                    right: "0",
                    color: "gray",
                  }}
                />
              </List>
              <List>
                <button className="sub-btn">subscribe</button>
              </List>
              <List id="login">
                <a href="#login" className="login-link">
                  Login
                </a>
              </List>
            </MenuItems>
          </Right>
          <MobileSideBar />
        </Wrapper>
      </Container>
    </>
  );
};

export default NavBar;
