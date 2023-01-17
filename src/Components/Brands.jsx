import styled from "styled-components";
import { brands } from "../assets/data";
import { mobile, tablet } from "../Responsive";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: auto;
  height: 10vw;
  display: flex;
  margin-bottom: 20px;
  padding: 0 3rem;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "0 20px",
  })}
  ${tablet({
    padding: "0 2rem",
  })}
`;
const Wrapper = styled.div`
  position: relative;
  width: 16%;
  height: 65%;
  border-radius: 5px;
  overflow: hidden;
  background: #0e2337;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.2);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Brands = () => {
  return (
    <>
      <Container>
        {brands.map((item) => (
          <Wrapper key={item.id}>
            <Image src={item.img}></Image>
          </Wrapper>
        ))}
      </Container>
    </>
  );
};

export default Brands;
