import React from 'react';
import "./HeroSection.css";
import { Button } from './Button';
import "../App.css";
function HeroSection() {
  return (
    <div className='hero-container'>
 
<h1>CITY TOUR,ADVENTURE KENYA AWAITS</h1>
<p >Choosing where to start in kenya can be overwhelming.From adrenaline-fuelled 
        adventures to more meditative outings,here are the best cities to tour with us
   in kenya along with great activities!
</p>

<div className='hero-btns'>
<Button className="btns" buttonStyle="btn--primary"
    buttonSize="btn--large"> 
    WATCH PREVIEW <i className='far fa-play-circle'/>
    </Button>
    <Button className="btns" buttonStyle="btn--outline"
    buttonSize="btn--large"> 
    GET STARTED
    </Button>
    
</div>
    </div>
  )
}

export default HeroSection