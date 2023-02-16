import React from 'react';
import Announcment from '../components/Announcment';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
