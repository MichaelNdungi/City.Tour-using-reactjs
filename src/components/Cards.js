import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="cardstitle" >City Tours</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./mikeimages/img-1.jpg'
              text='The beautiful capital city of kenya'
              label='Nairobi'
              path='/services'
            />
            <CardItem
              src='./mikeimages/img-8.jpg'
              text='Guts Bridge mombasa'
              label='Mombasa'
              path='/services'
            />
             <CardItem
              src='./mikeimages/img-7.jpg'
              text='National park landscape'
              label='Nakuru'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./mikeimages/img-5.jpg'
              text='Skyline Lake Victoria View'
              label='Kisumu'
              path='/services'
            />
            <CardItem
              src='./mikeimages/img-9.jpg'
              text='Ruins of ancient Gedi(Gede)'
              label='Malindi'
              path='/products'
            />
            <CardItem
              src='./mikeimages/img-2.jpg'
              text='beauty'
              label='Nairobi'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;