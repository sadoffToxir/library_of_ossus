import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='container'>
      <div className='logoContainer'>
        <img src={logo} alt='' className='logo' />
      </div>
      <div className='menu'>
        <div className='item'>People</div>
        <div className='item'>Planets</div>
        <div className='item'>Starships</div>
      </div>
    </div>
  </div>
);

export default Header;
