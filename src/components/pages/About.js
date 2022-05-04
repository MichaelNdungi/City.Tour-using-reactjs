import React from 'react';
import '../../App.css';

import AboutContent from '../AboutContent';
import HeroSectionAbout from "../HeroSectionAbout";
import Footer from '../Footer';

function Home() {
  return (
    <>
     <HeroSectionAbout/>
     <br></br>
      <AboutContent />
      <br></br>
      <br></br>
      <br></br>
      <hr className='hline2'></hr>
      <Footer />
    </>
  );
}

export default Home;



