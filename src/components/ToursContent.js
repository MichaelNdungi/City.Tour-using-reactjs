import React from 'react';
import "../App.css";
import "./Tours.css";
import "../MyApp.scss";
import "./Footer.css";
import { Link } from 'react-router-dom';
function Tours() {
  return (
    <>
    
    <div className='tourpar'>
    <p>It’s fun to explore Cities in  Kenya on your own, but tour guides offer expert 
      knowledge and connections that you can’t get anywhere else. 
      To make the most of your trip, choose from the experiences 
      listed here and see NYC from a new perspective. An expert guide can 
      give you just the insider experience you’ve been craving. </p>
    </div>

    <div className='both'>
      <div className='share'>
    <h1 classsName="sharec" >share:</h1>
    </div>
    <div class='social-iconss'>
      
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </div>
          <div className='bthSearchnoffer'>
          <div className="search1">
          <i class="fa fa-search" aria-hidden="true" size="900px" ></i>
          <input
         
          type="text"
          className='inputt'
          label="Search"
          placeholder='Search'

          >
            </input>

          </div>
          <div className='alloffers'>
          <div className='offer'>
          <h1 className='offerh1' >Offer Available</h1>
          </div>
          <div className='offer'>
          <h1 className='offerh1' >Type</h1>
          </div>
          <div className='offer'>
          <h1 className='offerh1' >Featured</h1>
          </div>
       
          
        
          </div>
          </div>
          <hr className='hline2'></hr>
    <div className='alltours'>
  
    <div className='allwrapper'>
      <div className='picwrapperr'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Maasai Mara</h1>
        <p className='p1'>Hot air ballon</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    
    
    <div className='allwrapper'>
      <div className='picwrapperr1'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Nairobi</h1>
        <p className='p1'>explore the green city</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    <div className='allwrapper'>
      <div className='picwrapperr2'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Nakuru</h1>
        <p className='p1'>beautiful grasslands</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    <div className='allwrapper'>
      <div className='picwrapperr3'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Nairobi</h1>
        <p className='p1'>unmissable attractions</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    <div className='allwrapper'>
      <div className='picwrapperr4'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Kisumu</h1>
        <p className='p1'>lakeside</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    <div className='allwrapper'>
      <div className='picwrapperr5'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Naivasha</h1>
        <p className='p1'>lakesideview</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    
    <div className='allwrapper'>
      <div className='picwrapperr6'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Kisumu</h1>
        <p className='p1'>camly lakeside view</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      



    </div>
    <div className='allwrapper'>
      <div className='picwrapperr7'>

      </div>
      <div className='contentwrapper'>
        <h1 className='hh1'>Nakuru</h1>
        <p className='p1'>colourful flamingoes</p>
        <br></br>
        <button className='btnone'>Buy Ticket</button>   <button className='btntwo'>more info</button>
       
        

      </div>
      
      
      
      
      



    
      
      



    
      



    </div>
    


      
      



    </div>
   </>
 
  );
}

export default Tours;
 