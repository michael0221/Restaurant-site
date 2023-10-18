import React from 'react';
// import  GiHamburgerMenu  from 'react-icons/gi';
import Hamburger from 'hamburger-react';

// import { MdOutlineResturantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [isOpen, setOpen] = React.useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logp" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#Home">Home</a></li>
        <li className='p__opensans'><a href="#About">About</a></li>
        <li className='p__opensans'><a href="#Menu">Menu</a></li>
        <li className='p__opensans'><a href="#Awards">Awards</a></li>
        <li className='p__opensans'><a href="#Contacts">Contacts</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login/Register</a>
        <div></div>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <Hamburger size={27} direction='right' color='#fff'  />

        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <Hamburger size={27} direction='right' className='overlay__close'  />
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href="#Home">Home</a></li>
            <li className='p__opensans'><a href="#About">About</a></li>
            <li className='p__opensans'><a href="#Menu">Menu</a></li>
            <li className='p__opensans'><a href="#Awards">Awards</a></li>
            <li className='p__opensans'><a href="#Contacts">Contacts</a></li>
          </ul>
        </div>


      </div>
    </nav>
  )

};

export default Navbar;
