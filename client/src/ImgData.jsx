import React from 'react';
import Gallery from './Gallery';

import house1_1 from '../src/images/house1-1.jpg';
import house1_2 from '../src/images/house1-2.jpeg';
import house1_3 from '../src/images/house1-3.jpeg';
import house1_4 from '../src/images/house1-4.jpeg';
import house1_5 from '../src/images/house1-5.jpeg';
import house1_6 from '../src/images/house1-6.jpeg';
import house1_7 from '../src/images/house1-7.jpeg';
import house1_8 from '../src/images/house1-8.jpeg';
import house1_9 from '../src/images/house1-9.jpeg';
import house1_10 from '../src/images/house1-10.jpeg';
import house1_11 from '../src/images/house1-11.jpeg';

import house2_1 from '../src/images/house2/house2_1.jpg';
import house2_2 from '../src/images/house2/house2_2.jpg';
import house2_3 from '../src/images/house2/house2_3.jpg';
import house2_4 from '../src/images/house2/house2_4.jpg';
import house2_5 from '../src/images/house2/house2_5.jpg';
import house2_6 from '../src/images/house2/house2_6.jpg';
import house2_7 from '../src/images/house2/house2_7.jpg';
import house2_8 from '../src/images/house2/house2_8.jpg';
import house2_9 from '../src/images/house2/house2_9.jpg';
import house2_10 from '../src/images/house2/house2_10.jpg';
import house2_11 from '../src/images/house2/house2_11.jpg';

const ImgData=(props)=>{
const images1 = [
   [ house1_1,
    house1_2,
    house1_3,
    house1_4,
    house1_5,
    house1_6,
    house1_7,
    house1_8,
    house1_9,
    house1_10,
    house1_11],

    [
        house2_1,
        house2_2,
        house2_3,
        house2_4,
        house2_5,
        house2_6,
        house2_7,
        house2_8,
        house2_9,
        house2_10,
        house2_11,
    ]
]
  
    return(
        <Gallery images2={images1[props.index]}/>
    );
    
};

export default ImgData;