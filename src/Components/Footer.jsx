import { Copyright, Facebook, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../Responsive";
import "./Footer.css";

const Container = styled.div`
  display: flex;
  color: white;
  padding: 1rem 2rem;

  ${mobile({
    flexDirection: "column",
    padding: "1rem 0.5rem",
    height: "68vh",
  })}

  section {
    flex: 2;
    display: flex;

    ${mobile({
      flex: "3",
      height: "200px",
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    })}
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 5px 0px;
  font-size: 0.7em;
  line-height: 20px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${mobile({
    flex: "1",
  })}
`;
const Title = styled.h6`
  margin: 10px 0;
  color: #c0c0c0;
  font-weight: 650;
  ${mobile({
    fontSize: "0.8rem",
  })}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  ${mobile({
    flexWrap: "wrap",
    gap: "10px",
  })}
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 0.8em;
  cursor: pointer;
  &:active {
    color: #0031ae;
  }
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding-top: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({
    flex: "1",
    display: "flex",
    flexDirection: "column",
  })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <List>
          <ListItem>About Disney+ Hotstar</ListItem>
          <ListItem>Terms Of Use</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Feedback</ListItem>
          <ListItem>Careers</ListItem>
        </List>
        <Desc>
          <Copyright style={{ fontSize: "10px", marginRight: "5px" }} />
          2023 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </Desc>
      </Left>
      <section>
        <Center>
          <Title>Connect with us</Title>
          <SocialIcon>
            <Facebook
              sx={{
                fontSize: "3rem",
                color: "#b3b3b3",
                backgroundColor: "none",
              }}
            />
            <Twitter
              sx={{
                fontSize: "3rem",
                color: "#b3b3b3",
                backgroundColor: "none",
              }}
            />
          </SocialIcon>
        </Center>
        <Right>
          <Title>Disney+ Hotstar App</Title>
          <div className="flex social-btns">
            <a className="app-btn blu flex vert" href="http:google.com">
              <i id="icon" className="fab fa-google-play"></i>
              <p>
                Get it on <br /> <span className="big-txt">Google Play</span>
              </p>
            </a>
            <a className="app-btn blu flex vert" href="http:apple.com">
              <i id="icon" className="fab fa-apple"></i>
              <p>
                Available on
                <br /> <span className="big-txt">App Store</span>
              </p>
            </a>
          </div>
        </Right>
      </section>
    </Container>
  );
};

export default Footer;
