import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../Text/Text.jsx';
import './SidebarNavigation.style.scss';
import { useLocation } from 'react-router-dom';
import hamburgerLight from '../../../assets/images/hamburger-light.png';
import hamburgerDark from '../../../assets/images/hamburger-dark.png';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import darkTheme from '../../../assets/images/dark-theme.png';
import lightTheme from '../../../assets/images/light-theme.png';

const SidebarNavigation = ({ changeTheme }) => {
  const location = useLocation();
  const [sidebarOpeness, setSidebarOpeness] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <div className='hamburger'>
        <img src={theme === 'light' ? hamburgerLight : theme === 'dark' ? hamburgerDark : null}
          alt='' onClick={() => setSidebarOpeness(true)} />
      </div>
      {
        sidebarOpeness && <div className='sidebar-menu'>

          <div className='sidebar-menu-navigation'>
            <div className='sidebar-close-button' onClick={() => setSidebarOpeness(false)}>
              &times;
            </div>
            <div className='sidebar-menu-theme-item' >
              <Text wrapperClass='menu-item-text'>
                <img onClick={changeTheme} src={theme === 'dark' ? lightTheme : theme === 'light' ? darkTheme : null} alt='' />
              </Text>
            </div>
            <Link to='/people'>
              <div className={location.pathname === '/people' ? 'sidebar-menu-selectedItem' : 'sidebar-menu-item'}
                onClick={() => setSidebarOpeness(false)}>
                <Text wrapperClass='menu-item-text'>People</Text>
              </div>
            </Link>
            <Link to='/planets'>
              <div className={location.pathname === '/planets' ? 'sidebar-menu-selectedItem' : 'sidebar-menu-item'}
                onClick={() => setSidebarOpeness(false)}>
                <Text wrapperClass='menu-item-text'>Planets</Text>
              </div>
            </Link>
            <Link to='/starships'>
              <div className={location.pathname === '/starships' ? 'sidebar-menu-selectedItem' : 'sidebar-menu-item'}
                onClick={() => setSidebarOpeness(false)}>
                <Text wrapperClass='menu-item-text'>Starships</Text>
              </div>
            </Link>
          </div>
        </div>
      }
    </>
  );
};

SidebarNavigation.propTypes =
{
  changeTheme: PropTypes.func,
};

export default SidebarNavigation;
