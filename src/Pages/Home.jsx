import React from "react";
import Brands from "../Components/Brands";
import Content from "../Components/Content";
import NavBar from "../Components/NavBar";
import Slider from "../Components/Slider";
import { movies, series, popularMovies } from "../assets/data";
import Footer from "../Components/Footer";
import MobileNavBar from "../Components/MobileNavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <Brands />
      <Content data={movies} title={"Latest & Trending"} />
      <Content data={series} title={"Popular Shows"} />
      <Content data={popularMovies} title={"Superhero Movies"} />
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default Home;
