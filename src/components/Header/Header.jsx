import React, { useEffect, useState } from 'react';
import './Header.styles.scss';
import SidebarNavigation from './SidebarNavigation/SidebarNavigation.jsx';
import NavbarNavigation from './NavbarNavigation/NavbarNavigation.jsx';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch({ type: 'LOAD_THEME', theme: 'light' });
  }, []);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'light' : null;
    dispatch({ type: 'LOAD_THEME', theme: newTheme });
  };


  return (
    <div className='header' theme={theme}>
      <div className='container' theme={theme}>
        <div className='logoContainer' theme={theme}>
          <img src={theme === 'dark' ? logoDark : theme === 'light' ? logoLight : null}
            alt='' className='logo' />
        </div>
        {
          windowDimensions.width > 700 ? <NavbarNavigation changeTheme={changeTheme} /> : <SidebarNavigation changeTheme={changeTheme} />
        }

      </div>
    </div>
  );
};

export default Header;
