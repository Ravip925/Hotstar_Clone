import styled from "styled-components";
import "./Content.css";
import { Add, PlayArrow } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: "30vh",
  })}
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: auto;
  overflow-x: visible;
  overflow-y: smooth;
`;
const Latest = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h3 {
    width: 100%;
    font-size: 1.3em;
    font-family: "roboto";
    color: white;
    text-align: start;

    &:hover {
      color: blue;
    }
  }
`;
const Card = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s all;
  &:hover {
    position: relative;
    z-index: 10;
    transform: scale(1.3);
    background: linear-gradient(to bottom, rgba(4, 8, 15, 0) 10%, #192133 70%),
      url(${(props) => props.url});
    background-size: cover;
  }
`;

const Content = ({ data, title }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slicedData, setSlicedData] = useState(data);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 425) {
      console.log("yes");
      setSlicedData(data.slice(0, 3));
    } else {
      setSlicedData(data.slice(0, 7));
    }
  }, [screenWidth, data]);

  return (
    <>
      <Container>
        <Wrapper>
          <Latest>
            <h3>{title}</h3>
            <div className="content">
              <div className="inner_container">
                {slicedData.map((items) => (
                  <Card
                    id="card"
                    className="card"
                    key={items.id}
                    url={items.image}
                  >
                    <div id="card_detail">
                      <h5>{items.name}</h5>
                      <p>
                        <span>{items.time}</span>
                        <span>{items.cat},</span>
                        <span>{items.lan}</span>
                      </p>
                      <p className="desc">{items.desc}</p>
                      <p className="play_btn">
                        <PlayArrow className="play_arrow" />
                        <button> WATCH MOVIE</button>
                        <Add className="add_arrow" />
                        <button>ADD TO WATCHLIST</button>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Latest>
        </Wrapper>
      </Container>
    </>
  );
};

export default Content;
