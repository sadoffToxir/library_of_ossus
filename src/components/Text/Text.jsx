import React from 'react';
import { PropTypes } from 'prop-types';
import './Text.style.scss';
import { useSelector } from 'react-redux';

const Text = ({ wrapperClass, children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <span className='textBasic' theme={theme}>
      <p className={wrapperClass}>{children}</p>
    </span>
  );
};

Text.propTypes = {
  wrapperClass: PropTypes.any,
  children: PropTypes.any,
};

export default Text;
