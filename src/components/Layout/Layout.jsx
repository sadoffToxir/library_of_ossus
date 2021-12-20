import React from 'react';
import Header from '../Header/Header.jsx';
import './Layout.style.scss';
import { PropTypes } from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
