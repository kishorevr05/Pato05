import React from 'react';
import './Navbar.css';
import Img from "../../Assets/1.jpg";
import Img1 from '../../Assets/2.jpg';
import Img2 from '../../Assets/3.jpg';
import Img3 from '../../Assets/4.webp'
import { FaTripadvisor } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="navbar">
        <div className="logo">
          <img src={Img3} alt="" />
        </div>
        <div className="nav2">
         <p>HOME</p>
         <p>MENU</p>
         <p>RESERVATION</p>
         <p>GALLERY</p>
         <p>ABOUT</p>
         <p>BLOG</p>
         <p>CONTACT</p>
        </div>
        <div className="nav3">
        <FaTripadvisor  className='w1'/>
        <FaFacebookF className='w1'/>
        <FaTwitter  className='w1'/>
        </div>
      </div>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="navSwiper"
      >
        <SwiperSlide>
          <div className='Home' >
            <div className='backimg'>
              <img className='img' src={Img} alt="" />
              <p className='overlay'></p>
            </div>
            <div className="h1">
              <div className="content">
              <h2 className='animate__animated animate__fadeInDown'>
             Welcome to <br/>
             <h1 className='animate__animated animate__fadeInUpBig'>
             PATO PLACE
            </h1>
            </h2>
                <button className='btn animate__animated animate__zoomIn'>LOOK MENU </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Home'>
            <div className='backimg'>
              <img className='img' src={Img1} alt="" />
              <p className='overlay'></p>
            </div>
            <div className="h1">
              <div className="content">
                <h2 className='animate__animated animate__rotateInDownLeft'>Welcome to <br/><h1 className=' animate__animated animate__bounceInRight'>PATO PLACE</h1></h2>
                <button className='btn animate__animated animate__fadeInUp'>Look Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Home'>
            <div className='backimg'>
              <img className='img' src={Img2} alt="" />
              <p className='overlay'></p>
            </div>
            <div className="h1">
              <div className="content">
                <h2 className='animate__animated animate__backInRight'>Welcome to <br/><h1 className='animate__animated animate__backInRight'>PATO PLACE</h1></h2>
                <button className='btn animate__animated animate__backInUp'>Look Menu</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Navbar;
