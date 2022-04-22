import React from 'react';
import '../../App.css';
import TOURCONTENT from "../ToursContent";
import  ReactCardSlider from '../ReactCardSlider';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <ReactCardSlider />
      <br></br>
      <TOURCONTENT/>
    
    
    </>
  );
}

export default Home;