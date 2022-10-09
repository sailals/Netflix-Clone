import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import LatestCartoons from "../Components/LatestCartoons";
import LatestMovies from "../Components/LatestMovies";
import LatestSeries from "../Components/LatestSeries";
import MovieSlide from "../Components/MovieSlide";
import Navbar from "../Components/Navbar";
import Special from "../Components/Special";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <LatestMovies />
      <LatestSeries />
      <LatestCartoons />
      <Special />
      <MovieSlide />
      <Footer />
    </>
  );
}

export default Home;
