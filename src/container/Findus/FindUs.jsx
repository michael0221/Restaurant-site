import React from 'react';
import { SubHeading,} from '../../components';
import { images, data } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant'>Find Us</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className='headtext__cormorant' style={{fontSize: '30px'}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      <button className='custom__button' style={{margin: '2rem 0'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
