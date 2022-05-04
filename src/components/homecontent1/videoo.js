import React from 'react';
import vid from "../../video-1.mp4";
import "./videoo.css";
function HomeContent1() {
    return (
        <div className='videoandwords-container'>
            <div className='words-conatiner'>
                <div className='timeforK'>
                <h1 >It's Time for Kenya Cities</h1>
                </div>
                <div className='timeforp'>
                <p >World-class culture, dining,
                     entertainment—across all cities in kenya.
                      There’s never been a better
                       time to plan your trip.</p>
                       </div>


            </div>
            <div className='video-container'>
            
            <video loop autoPlay >
            
        <source
        className='v-container'
          src={vid}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>



            </div>


        </div>
    );
}
export default HomeContent1;
