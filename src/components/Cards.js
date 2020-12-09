import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>NEW PRODUCTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mustang.jpg'
              text='Squier Bullet Mustang'
              label='Guitars'
              path='/products'
            />
            <CardItem
              src='images/strat.jpg'
              text="Squier Classic Vibe '60s Stratocaster"
              label='Guitars'
              path='/products'
            />
              <CardItem
              src='images/gretsch.jpg'
              text="Gretsch G5222 Electromatic Double Jet"
              label='Guitars'
              path='/products'
            />
          </ul>
     
          <ul className='cards__items'>
            <CardItem
              src='images/acoustic.jpg'
              text='Acoustic Guitar'
              label='Guitars'
              path='/products'
            />
            <CardItem
              src='images/electric.jpg'
              text='Electric Guitar'
              label='Guitars'
              path='/products'
            />
            <CardItem
              src='images/amp.jpg'
              text='Amplifiers'
              label='Gears'
              path='/products'
            />
                   <CardItem
              src='images/effects.jpg'
              text='Effects'
              label='Gears'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
