import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Text from '../../Assets/c1.webp'
import { IoMdStar } from "react-icons/io";
import { Navigation, Autoplay } from 'swiper/modules'; 

import './Customer.css';

const Customer = () => {
  return (
    <div className='cus4'>
      <div className="upp">
        <p>Customers Say</p>
        <h2>Review</h2>
      </div>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{ delay: 3500 }} 
        modules={[Navigation, Autoplay]} 
        className="Swiper1"
      >
        <SwiperSlide>
          <div className="cus">
            <img src={Text} alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre- <br />tium nec, fermentum viverra dui ”</p>
            <div className="cus1">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <div className="cus2">
              <p>Marie Simmons ˗ New York</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cus">
            <img src={Text} alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre- <br />tium nec, fermentum viverra dui ”</p>
            <div className="cus1">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <div className="cus2">
              <p>Marie Simmons ˗ New York</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cus">
            <img src={Text} alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre <br />-tium nec, fermentum viverra dui ”</p>
            <div className="cus1">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <div className="cus2">
              <p>Marie Simmons ˗ New York</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Customer;
