import React from 'react';

// import {BsFillplayFill, BsPauseFill} from 'react-icon/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => (
  <div className='app__video'>
    <video src={meal} type='video/mp4' controls='' muted autoPlay={'autoPlay'} preload='auto' loop></video>
    <div className='app__video-overlay flex-center'>
      <p className='app__video-overlay-p headtext__cormorant'>Fine Dining</p>
    </div>
  </div>
);

export default Intro;
