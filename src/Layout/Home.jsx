import React from 'react';
import Navbar from '../Components/Homecover/Navbar';
import Italian from '../Components/Italian/Italian';
import Discover from '../Components/Discover/Discover';
import Food from '../Components/Food/Food';
import Rest1 from "../Assets/fo.webp"; 
import Rest2 from "../Assets/fo1.webp";
import Rest3 from "../Assets/fo2.webp";
import Menu from '../Components/Menu/Menu';
import Upcoming from '../Components/Upcoming/Upcoming';
import Date from '../Components/Date/Date';
import Customer from '../Components/Customer/Customer';
import Video from '../Components/Video/Video';
import Blog from '../Components/Blog/Blog';
import Room from '../Assets/t1.webp'
import Room1 from '../Assets/t2.webp'
import Room2 from '../Assets/t3.webp'
import Special from '../Components/Special/Special';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  const foodItems = [
    {
      image: Rest1,
      title: 'Romantic Restaurant',
      description: 'Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.',
    },
    {
      image: Rest2,
      title: 'Delicious Food',
      description: 'Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna.',
    },
    {
      image: Rest3,
      title: 'Red Wines You Love',
      description: 'Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
    },
  ];
  const foodItems1 = [
    {
      image: Room,
      title: 'Romantic Restaurant',
      description: 'Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.',
    },
    {
      image: Room1,
      title: 'Delicious Food',
      description: 'Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna.',
    },
    {
      image: Room2,
      title: 'Red Wines You Love',
      description: 'Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
    },
  ];

  return (
    <div>
      <Navbar />
      <Italian />
      <Discover />
      <Food foodItems={foodItems} />
      <Menu/>
      <Upcoming/>
      <Date/>
      <Customer/>
      <Video/>
      <Blog/>
      <Food foodItems={foodItems1} />
      <Special/>
      <Footer/>
    </div>
  );
}

export default Home;
