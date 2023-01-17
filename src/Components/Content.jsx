import styled from "styled-components";
import "./Content.css";
import {
  Add,
  ArrowBackIos,
  ArrowForwardIos,
  PlayArrow,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { mobile, tablet } from "../Responsive";

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: 0.2s all;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  &:hover ${Arrow} {
    opacity: 0.8;
  }
  ${mobile({
    height: "30vh",
    margin: "12px 0",
  })}
  ${tablet({
    height: "30vh",
    margin: "25px 0",
  })}
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: auto;
  overflow-x: hidden;
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
  ${mobile({
    padding: "0 20px",
  })}
  ${tablet({
    padding: "0 2rem",
  })}
  h3 {
    width: 100%;
    font-size: 1.3em;
    font-family: "roboto";
    color: white;
    text-align: start;

    &:hover {
      color: blue;
    }
    ${tablet({
      fontSize: "2rem",
    })}
  }
`;
const Card = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s all;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  &:hover {
    position: relative;
    z-index: 10;
    transform: scale(1.3);
    background: linear-gradient(to bottom, rgba(4, 8, 15, 0) 10%, #192133 70%),
      url(${(props) => props.url});
    background-size: cover;
  }
`;
const Slide = styled.div`
  transform: translateX(${(props) => props.slideIndex * -50}vw);
  ${mobile({
    transform: "translate(0)",
  })}
  ${tablet({
    transform: "translate(0)",
  })}
`;

const Content = ({ data, title, screenWidth }) => {
  const [slicedData, setSlicedData] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(0);
    } else {
      setSlideIndex(2);
    }
  };

  useEffect(() => {
    if (screenWidth < 425) {
      setSlicedData(data.slice(0, 3));
    } else if (screenWidth >= 500 && screenWidth <= 950) {
      setSlicedData(data.slice(0, 4));
    } else {
      setSlicedData(data.slice(0, 15));
    }
  }, [screenWidth, data]);

  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIos sx={{ fontSize: "2.5rem" }} />
        </Arrow>
        <Wrapper>
          <Latest>
            <h3>{title}</h3>
            <h5 className="more">MORE</h5>
            <div className="content">
              <Slide slideIndex={slideIndex} className="inner_container">
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
              </Slide>
            </div>
          </Latest>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIos sx={{ fontSize: "2.5rem" }} />
        </Arrow>
      </Container>
    </>
  );
};

export default Content;
