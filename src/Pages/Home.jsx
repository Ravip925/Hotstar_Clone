import React, { useEffect, useState } from "react";
import Brands from "../Components/Brands";
import Content from "../Components/Content";
import NavBar from "../Components/NavBar";
import Slider from "../Components/Slider";
import { movies, series, popularMovies } from "../assets/data";
import Footer from "../Components/Footer";
import MobileNavBar from "../Components/MobileNavBar";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <NavBar />
      <Slider screenWidth={screenWidth} />
      <Brands />
      <Content
        screenWidth={screenWidth}
        data={movies}
        title={"Latest & Trending"}
      />
      <Content
        screenWidth={screenWidth}
        data={series}
        title={"Popular Shows"}
      />
      <Content
        screenWidth={screenWidth}
        data={popularMovies}
        title={"Superhero Movies"}
      />
      <Content
        screenWidth={screenWidth}
        data={movies}
        title={"Thriller Movies"}
      />
      <Content
        screenWidth={screenWidth}
        data={series}
        title={"New Episode Daily"}
      />
      <Content
        screenWidth={screenWidth}
        data={popularMovies}
        title={"Action Movies"}
      />
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default Home;
