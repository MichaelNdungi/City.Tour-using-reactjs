import React from 'react';
import '../../App.css';

import AboutContent from '../AboutContent';
import  ReactCardSlider from '../ReactCardSlider';
import Footer from '../Footer';

function Home() {
  return (
    <>
     <ReactCardSlider />
     <br></br>
      <AboutContent />
      <br></br>
      <Footer />
    </>
  );
}

export default Home;



