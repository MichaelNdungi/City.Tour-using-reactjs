import React from 'react';
import '../../App.css';
import TOURCONTENT from "../ToursContent";
// import  ReactCardSlider from '../ReactCardSlider';
import Footer from '../Footer';
import HeroSectionTours from '../HeroSectionTours';


function Home() {
  return (
    <>
      <HeroSectionTours/>
      <br></br>
      <TOURCONTENT/>
      <br></br>
      <hr className='hline2'></hr>
      {/* <ReactCardSlider/>
      <hr className='hline2'></hr> */}
      <Footer/>
      
    
    
    </>
  );
}

export default Home;
