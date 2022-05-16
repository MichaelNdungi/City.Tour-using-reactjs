import React from 'react';
import "../App.css";
import "./Slider.css";
import "../index.css";
import img from "../img-4.jpg"



import { MdChevronLeft, MdChevronRight} from "react-icons/md";
const ReactCardSlider = (props)=>{
    const slides=[
        {photo:"../img-4.jpg",title:"Nairobi",description:"ths is the description"},
        {photo:"../img-4.jpg",title:"Kisumu",description:"ths is the description"},
        {photo:"../img-4.jpg",title:"Nakuru",description:"ths is the description"},
        {photo:"../img-4.jpg",title:"Eldoret",description:"ths is the description"},
        {photo:{img},title:"Malindi",description:"ths is the description"},
        {photo:{img},title:"Kakamega",description:"ths is the description"},
        {photo:{img},title:"Kitale",description:"ths is the description"},
        {photo:{img},title:"Thika",description:"ths is the description"},
        {photo:{img},title:"Meru",description:"ths is the description"},
        {photo:{img},title:"Voi",description:"ths is the description"},
        
    ];
    const slideLeft= ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 0;

    }
    const slideRight= ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 0;
    }
    
    return(
        <>
        <div className='featured'>
            <h1 className='featuredh1'>Featured Content</h1>
        </div>
        <div id="main-slider-container">
           

            

< MdChevronLeft size={60} className="slider-icon-left"onClick={slideLeft}/>
<div id="slider">
{
slides.map((slide,index)=>{
    return(
        <div className="slider-card" key={index}>
            <div className="slider-card-image" >
                <img src={slide.photo}/>
            </div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>

                

        </div>
    )   
})

}
</div>

< MdChevronRight size={60} className="slider-icon-right" onClick={slideRight}/>


        </div>
        </>
    );
}
export default ReactCardSlider;
