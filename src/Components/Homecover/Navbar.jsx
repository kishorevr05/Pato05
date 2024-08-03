import React, { useState } from 'react';
import './Navbar.css';
import Img from "../../Assets/1.jpg";
import Img1 from '../../Assets/2.jpg';
import Img2 from '../../Assets/3.jpg';
import Img3 from '../../Assets/4.webp';
import { FaTripadvisor, FaFacebookF, FaTwitter } from "react-icons/fa";
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

// Gallery Images
import Eatt from '../../Assets/o1.webp';
import Eatt1 from '../../Assets/o2.webp';
import Eatt2 from '../../Assets/o3.webp';
import Eatt3 from '../../Assets/o4.webp';
import Eatt4 from '../../Assets/o5.webp';
import Eatt5 from '../../Assets/o6.webp';
import Eatt6 from '../../Assets/o7.webp';
import Eatt7 from '../../Assets/o8.webp';
import Eatt8 from '../../Assets/o9.webp';
import Eatt9 from '../../Assets/o10.webp';
import Eatt10 from '../../Assets/o11.webp';
import Eatt11 from '../../Assets/o12.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar1">
      <div className="navbar">
        <div className="logo">
          <img src={Img3} alt="Logo" />
        </div>
        <div className={`nav2 ${isOpen ? 'show' : ''}`}>
          <p>HOME</p>
          <p>MENU</p>
          <p>GALLERY</p>
          <p>ABOUT</p>
          <p>BLOG</p>
          <p>CONTACT</p>
          <button className='reservation-btn'>RESERVATION</button>
          <div className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-row">
              <div className="gallery-column">
                <img src={Eatt} alt="" />
                <img src={Eatt1} alt="" />
                <img src={Eatt2} alt="" />
                <img src={Eatt3} alt="" />
              </div>
              <div className="gallery-column">
                <img src={Eatt4} alt="" />
                <img src={Eatt5} alt="" />
                <img src={Eatt6} alt="" />
                <img src={Eatt7} alt="" />
              </div>
              <div className="gallery-column">
                <img src={Eatt8} alt="" />
                <img src={Eatt9} alt="" />
                <img src={Eatt10} alt="" />
                <img src={Eatt11} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="nav3">
          <FaTripadvisor className='w1' />
          <FaFacebookF className='w1' />
          <FaTwitter className='w1' />
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
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
          <div className='Home'>
            <div className='backimg'>
              <img className='img' src={Img} alt="" />
              <p className='overlay'></p>
            </div>
            <div className="h1">
              <div className="content">
                <h2 className='animate__animated animate__fadeInDown'>
                  Welcome to <br />
                  <h1 className='animate__animated animate__fadeInUpBig'>
                    PATO PLACE
                  </h1>
                </h2>
                <button className='btn animate__animated animate__zoomIn'>LOOK MENU</button>
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
                <h2 className='animate__animated animate__rotateInDownLeft'>Welcome to <br /><h1 className='animate__animated animate__bounceInRight'>PATO PLACE</h1></h2>
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
                <h2 className='animate__animated animate__backInRight'>Welcome to <br /><h1 className='animate__animated animate__backInRight'>PATO PLACE</h1></h2>
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
