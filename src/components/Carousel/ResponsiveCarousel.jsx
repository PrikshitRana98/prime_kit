import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

import screen1 from '../../assets/images/screen1.png';
import screen2 from '../../assets/images/screen2.png';
import screen3 from '../../assets/images/screen4.png';
import screen5 from '../../assets/images/screen5.png';


const ResponsiveCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={screen1} alt="Screen 1" />
        
      </div>
      <div>
        <img src={screen2} alt="Screen 2" />
        
      </div>
      <div>
        <img src={screen3} alt="Screen 3" />
       
      </div>
      <div>
        <img src={screen3} alt="Screen 3" />
       
      </div>
      <div>
        <img src={screen5} alt="Screen 5" />
        
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousel;