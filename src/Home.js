// Home.js
import React from 'react';
import './Home.css';
import fcb from './assets/fcb-2.svg'
import SubscribeButton from './SubscribeButton';

const Home = () => {
  return (
    <div className="Home">
      <div>
      <p className='home-text'>Join Our Club <img src={fcb} ></img> </p>
      <SubscribeButton />
      </div>
  

    </div>
  );
};

export default Home;
