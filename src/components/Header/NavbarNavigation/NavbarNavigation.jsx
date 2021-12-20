import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../Text/Text.jsx';
import './NavbarNavigation.style.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import darkTheme from '../../../assets/images/dark-theme.png';
import lightTheme from '../../../assets/images/light-theme.png';
import PropTypes from 'prop-types';

const NavbarNavigation = ({ changeTheme }) => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className='navbar-menu' theme={theme}>
      <div className='menu-theme-item' >
        <Text wrapperClass='menu-item-text'>
          <img onClick={changeTheme} src={theme === 'dark' ? lightTheme : theme === 'light' ? darkTheme : null} alt='' />
        </Text>
      </div>
      <Link to='/people'>
        <div className={location.pathname === '/people' ? 'menu-selectedItem' : 'menu-item'} >
          <Text wrapperClass='menu-item-text'>People</Text>
        </div>
      </Link>
      <Link to='/planets'>
        <div className={location.pathname === '/planets' ? 'menu-selectedItem' : 'menu-item'} >
          <Text wrapperClass='menu-item-text'>Planets</Text>
        </div>
      </Link>
      <Link to='/starships'>
        <div className={location.pathname === '/starships' ? 'menu-selectedItem' : 'menu-item'} >
          <Text wrapperClass='menu-item-text'>Starships</Text>
        </div>
      </Link>
    </div>
  );
};

NavbarNavigation.propTypes =
{
  changeTheme: PropTypes.func,
};

export default NavbarNavigation;
