import React from 'react';
import './Footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Eat from '../../Assets/o1.webp'
import Eat1 from '../../Assets/o2.webp'
import Eat2 from '../../Assets/o3.webp'
import Eat3 from '../../Assets/o4.webp'
import Eat4 from '../../Assets/o5.webp'
import Eat5 from '../../Assets/o6.webp'
import Eat6 from '../../Assets/o7.webp'
import Eat7 from '../../Assets/o8.webp'
import Eat8 from '../../Assets/o9.webp'
import Eat9 from '../../Assets/o10.webp'
import Eat10 from '../../Assets/o11.webp'
import Eat11 from '../../Assets/o12.webp'

const Footer = () => {
  return (
    <div className="footer">
    <div className="fot">
        <div className="fot1">
            <h2>
            CONTACT US
            </h2>
            <div className="fot2">
            <FaLocationDot />
            <p> 8th floor, 379 Hudson St, New York, NY 10018</p>
            </div>
            <div className="fot2">
            <FaPhoneAlt />
            <p> (+1) 96 716 6879</p>
            </div>
            <div className="fot2">
            <IoMdMail />
            <p>contact@site.com</p>
            </div>
        </div>
        <div className="fot4">
           <h2>OPENING TIMES</h2>
           <div className="fot3">
            <p>09:30 AM – 11:00 PM</p>
            <p>Every Day</p>
           </div>
        </div>

    </div>
    <div className="fot">
        <div className="fot6">
        <div className="fot8">
            <h2>
            LATEST TWITTER
            </h2>
            <div className="fot7">
           <div className="fot10">
           <FaTwitter />
           <p> @colorlib</p>
           </div>
           <div className="fot9">
           <p>Activello is a good option. It has a slider built into that</p>
            <p>displays the featured image in the slider.</p>
            <p>https://buff.ly/2zaSfAQ</p>
            </div>
           </div>
        </div>
        </div>
        <div className="fot6">
        <div className="fot8">
            <div className="fot7">
           <div className="fot10">
           <FaTwitter />
           <p> @colorlib</p>
           </div>
           <div className="fot9">
           <p>Activello is a good option. It has a slider built into that</p>
            <p>displays https://buff.ly/2zaSfAQ</p>
            </div>
           </div>
        </div>
        </div>
    </div>
    <div className="eat">
        <h2>Gallery</h2>
        <div className="eat1">
            <div className="eat2">
           <img src={Eat} alt="" />
           <img src={Eat1} alt="" />
           <img src={Eat2} alt="" />
           <img src={Eat3} alt="" />
            </div>
            <div className="eat2">
           <img src={Eat4} alt="" />
           <img src={Eat5} alt="" />
           <img src={Eat6} alt="" />
           <img src={Eat7} alt="" />
            </div>
            <div className="eat2">
           <img src={Eat8} alt="" />
           <img src={Eat9} alt="" />
           <img src={Eat10} alt="" />
           <img src={Eat11} alt="" />
            </div>
        </div>
    </div>
    </div>
  );
};

export default Footer;
