import React from 'react';
import "../App.css";
import "./Slider.css";
import "../index.css";



import { MdChevronLeft, MdChevronRight} from "react-icons/md";
const ReactCardSlider = (props)=>{
    const slides=[
        {title:"Nairobi",description:"ths is the description"},
        {title:"Kisumu",description:"ths is the description"},
        {title:"Nakuru",description:"ths is the description"},
        {title:"Eldoret",description:"ths is the description"},
        {title:"Malindi",description:"ths is the description"},
        {title:"Kakamega",description:"ths is the description"},
        {title:"Kitale",description:"ths is the description"},
        {title:"Thika",description:"ths is the description"},
        {title:"Meru",description:"ths is the description"},
        {title:"Voi",description:"ths is the description"},
        
    ];
    const slideLeft= ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;

    }
    const slideRight= ()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    
    return(
        <div id="main-slider-container">

< MdChevronLeft size={60} className="slider-icon-left"onClick={slideLeft}/>
<div id="slider">
{
slides.map((slide,index)=>{
    return(
        <div className="slider-card" key={index}>
            <div className="slider-card-image" 
            ></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>

                

        </div>
    )   
})
}
</div>

< MdChevronRight size={60} className="slider-icon-right" onClick={slideRight}/>


        </div>
    );
}
export default ReactCardSlider;
