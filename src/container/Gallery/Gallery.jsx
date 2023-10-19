import React from 'react';
import { SubHeading,} from '../../components';
import { images, data } from '../../constants';
import './Gallery.css';

const Gallery = () => (
  <div className='app__gallery flex__center'>
   <div className="app__gallery-content">
    <SubHeading title='Instagram' />
    <h1 className='headtext__cormorant'>Photo Gallery</h1>
    <p className='p__opensans' style={{color: '#aaa', marginTop: '2rem', marginBottom: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    <button type='button' className='custom__button'>View More</button>
   </div>

   <div className='app__gallery-image'>
    <div className="app__gallery-images_container">
    <img src={images.gallery04} alt="" />
      <img src={images.gallery02} alt="" />
      <img src={images.gallery03} alt="" />
    </div>
   </div>
  </div>
);

export default Gallery;
