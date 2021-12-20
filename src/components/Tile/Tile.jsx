import React from 'react';
import { PropTypes } from 'prop-types';
import './Tile.style.scss';
import { urlToId } from '../common';
import { useHistory } from 'react-router';
import * as queryString from 'querystring';
import Text from '../Text/Text.jsx';
import { useSelector } from 'react-redux';

const Tile = ({ letters, children, setModalOpenness, setIdToRequest, url }) => {

  const theme = useSelector((state) => state.theme.theme);
  const history = useHistory();

  const firstLetters = (letters) => {
    const fLetters = letters[0];
    if (letters.includes(' ')) {
      return fLetters + letters[letters.indexOf(' ') + 1].toUpperCase();
    }
    if (letters.includes('-')) {
      return fLetters + letters[letters.indexOf('-') + 1].toUpperCase();
    }
    return letters.slice(0, 2).toUpperCase();
  };
  const openingModal = () => {
    setModalOpenness(true);
    setIdToRequest(id);
    history.push({
      search: queryString.stringify({ id })
    });
  };

  const id = urlToId(url);
  const fLetters = firstLetters(letters);

  return (
    <div className='tileContainer' onClick={openingModal} theme={theme}>
      <div className='tileAvatar'>
        <Text wrapperClass={'tileAvatarText'} >{fLetters}</Text>
      </div>
      <div className='attributes'>
        {children}
      </div>
    </div>
  );
};

Tile.propTypes = {
  letters: PropTypes.any,
  children: PropTypes.any,
  setModalOpenness: PropTypes.any,
  setIdToRequest: PropTypes.any,
  url: PropTypes.any,
};

export default Tile;
