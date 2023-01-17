import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { sliderItems } from "../assets/data";
import { mobile, tablet } from "../Responsive";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: 0.2s all;
`;
const Container = styled.div`
  width: 100%;
  margin: 80px 0 10px 0;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
  &:hover ${Arrow} {
    opacity: 0.8;
  }
  ${mobile({
    height: "35vh",
    margin: "55px 0 10px 0",
  })}
  ${tablet({
    height: "35vh",
  })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  padding: 20px 45px 20px 30px;
  ${mobile({
    height: "35vh",
    padding: "20px 20px 20px 20px",
  })}
  ${tablet({
    height: "35vh",
    padding: "1rem 2rem",
  })}

  .slider_container {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding: 3.5rem;
  height: 100%;
  background-color: #000000;
  box-shadow: 48px 1px 14px -4px rgba(0, 0, 0, 0.98);
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;
const Right = styled.div`
  flex: 2;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  ${(props) => {
    if (props.isScreenWidth < 950) {
      return css`
        background: url(${props.url});
      `;
    } else {
      return css`
        background: linear-gradient(
            90deg,
            #000000 8%,
            #131313d2 23%,
            rgba(217, 217, 217, 0) 47%
          ),
          url(${props.url});
      `;
    }
  }};
  background-size: cover;
  background-repeat: no-repeat;
  ${mobile({
    borderRadius: "10px",
  })};
  ${tablet({
    borderRadius: "10px",
  })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -120px;

  h1 {
    font-weight: 800;
  }
  ul {
    display: flex;
    color: #787878;
    list-style: disc;
    font-weight: 650;
    gap: 20px;
    justify-content: flex-start;
  }
  li {
    margin-right: 5px;
  }
  p {
    color: #b8b8b8;
    font-family: "roboto", sans-serif;
    line-height: 28px;
    font-weight: 500;
  }
`;

const Slider = ({ screenWidth }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex + 1);
      if (slideIndex === 2) {
        clearInterval(interval);
        setSlideIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos sx={{ fontSize: "3rem" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <div className="slider_container">
              <Left>
                <InfoContainer>
                  <h1>{item.title}</h1>
                  <ul>
                    <li style={{ listStyle: "none" }}>{item.category}</li>
                    <li>{item.genres}</li>
                    <li>{item.date}</li>
                  </ul>
                  <p>{item.desc}</p>
                </InfoContainer>
              </Left>
              <Right url={item.img} isScreenWidth={screenWidth}></Right>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos sx={{ fontSize: "3rem" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
