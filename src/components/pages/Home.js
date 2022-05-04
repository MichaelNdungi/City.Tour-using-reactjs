import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Videoo from "../homecontent1/videoo";

function Home() {
  return (
    <>
      <HeroSection />
      <br></br>
      <Cards />
   
      <Videoo/>
      
      <hr className='hline2'></hr>
      <Footer />
    </>
  );
}

export default Home;