import React from 'react'
import './Upcoming.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";
import bac1 from '../../Assets/bac1.jpg';
import bac2 from '../../Assets/bac2.webp';
import bac3 from '../../Assets/bac3.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Upcoming = () => {
  return (
    <div>
        <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="customSwiper"
      >
      
      <SwiperSlide className="customSlide" style={{ backgroundImage: `url(${bac1})` }}>
    <div className="up">
      <p>Upcomming</p>
      <h2>EVENTS</h2>
    </div>
    <div className="up1"data-aos="fade-up">
      <div className="up2">
        <p>08:00 PM TUESDAY-21 NOVEMBER 2018</p>
      </div>
      <div className="up3">
        <div className="up4">
          <div className="up7">
            <h5>WINES DURING SPECIFIC NIGHTS</h5>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
          </div>
          <div className="up5">
            <div className="up6">
              <h1>25</h1>
              <p>DAYS</p>
            </div>
            <div className="up6">
              <h1>09</h1>
              <p>HOURS</p>
            </div>
            <div className="up6">
              <h1>25</h1>
              <p>MINUTES</p>
            </div>
            <div className="up6">
              <h1>30</h1>
              <p>SECONDS</p>
            </div>
          </div>
          <div className="up8">
            <p>Learn More</p>
            <FaLongArrowAltRight className='up9' />
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
      <SwiperSlide className="customSlide" style={{ backgroundImage: `url(${bac2})` }}>
    <div className="up">
      <p>Upcomming</p>
      <h2>EVENTS</h2>
    </div>
    <div className="up1"data-aos="fade-up">
      <div className="up2">
        <p>08:00 PM TUESDAY-21 NOVEMBER 2018</p>
      </div>
      <div className="up3">
        <div className="up4">
          <div className="up7">
            <h5>WINES DURING SPECIFIC NIGHTS</h5>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
          </div>
          <div className="up5">
            <div className="up6">
              <h1>25</h1>
              <p>DAYS</p>
            </div>
            <div className="up6">
              <h1>09</h1>
              <p>HOURS</p>
            </div>
            <div className="up6">
              <h1>25</h1>
              <p>MINUTES</p>
            </div>
            <div className="up6">
              <h1>30</h1>
              <p>SECONDS</p>
            </div>
          </div>
          <div className="up8">
            <p>Learn More</p>
            <FaLongArrowAltRight className='up9' />
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
      <SwiperSlide className="customSlide" style={{ backgroundImage: `url(${bac3})` }}>
    <div className="up">
      <p>Upcomming</p>
      <h2>EVENTS</h2>
    </div>
    <div className="up1"data-aos="fade-up">
      <div className="up2">
        <p>08:00 PM TUESDAY-21 NOVEMBER 2018</p>
      </div>
      <div className="up3">
        <div className="up4">
          <div className="up7">
            <h5>WINES DURING SPECIFIC NIGHTS</h5>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia</p>
          </div>
          <div className="up5">
            <div className="up6">
              <h1>25</h1>
              <p>DAYS</p>
            </div>
            <div className="up6">
              <h1>09</h1>
              <p>HOURS</p>
            </div>
            <div className="up6">
              <h1>25</h1>
              <p>MINUTES</p>
            </div>
            <div className="up6">
              <h1>30</h1>
              <p>SECONDS</p>
            </div>
          </div>
          <div className="up8">
            <p>Learn More</p>
            <FaLongArrowAltRight className='up9' />
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Upcoming