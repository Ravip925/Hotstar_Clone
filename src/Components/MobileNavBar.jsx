import {
  HomeOutlined,
  LiveTvOutlined,
  MovieCreationOutlined,
  SportsBaseballOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #0c111b;
  border-top: 1px solid #192133;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: none;
  ${mobile({
    display: "block",
  })}
  ${tablet({
    display: "block",
    height: "75px",
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.6em;
  font-weight: 550;
  gap: 4px;
  ${tablet({
    fontSize: "1rem",
  })}
`;
const Image = styled.img`
  width: 80%;
`;

const MobileNavBar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Items>
            <HomeOutlined />
            <p>Home</p>
          </Items>
          <Items>
            <LiveTvOutlined />
            <p>TV</p>
          </Items>
          <Items>
            <Image src="https://www.hotstar.com/assets/b50f06bb7daf1f895483b259df7c5912.svg" />
          </Items>
          <Items>
            <MovieCreationOutlined />
            <p>Movies</p>
          </Items>
          <Items>
            <SportsBaseballOutlined />
            <p>Sports</p>
          </Items>
        </Wrapper>
      </Container>
    </>
  );
};

export default MobileNavBar;
