import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { urlToId } from '../../common/index.js';
import PropTypes from 'prop-types';
import Text from '../../Text/Text.jsx';
import './StarshipsModal.style.scss';

const StarshipsModal = ({ switchToTile }) => {
  const starship = useSelector((state) => state.starships.starship);
  const starshipPilots = useSelector((state) => state.starships.starshipPilots);
  const films = useSelector((state) => state.films.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (starship) {
      dispatch({ type: 'LOAD_STARSHIP_PILOTS', elements: starship.pilots });
      dispatch({ type: 'LOAD_FILM_FOR_LIST', elements: starship.films });
    }
  }, [starship]);
  return (
    <>
      <div className='starships-modal-name'><Text wrapperClass='starships-name'>{starship && starship.name}</Text></div>
      <div className='starships-modal-container'>
        <div className='starships-info'>
          <Text wrapperClass='starships-info-headers'>Stats</Text>
          <Text>Manufacturer: {starship && starship.manufacturer}</Text>
          <Text>Cost: {starship && starship.cost_in_credits}</Text>
          <Text>Length: {starship && starship.length}</Text>
          <Text>Max speed: {starship && starship.max_atmosphering_speed}</Text>
          <Text>Crew: {starship && starship.crew}</Text>
          <Text>Passengers: {starship && starship.passengers}</Text>
          <Text>Cargo capacity: {starship && starship.cargo_capacity}</Text>
          <Text>Consumables: {starship && starship.consumables}</Text>
        </div>
        <div className='starships-links'>
          <div className='starships-films-container'>
            <div className='starships-links-header'>
              <Text>Films</Text>
            </div>
            <ul className='starships-films-links'>
              {
                films.length > 0 ? films.map((el) => {
                  return <li key={el.title} onClick={() => switchToTile('films', urlToId(el.url))}>
                    <Text>{el.title}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='starships-pilots-container'>
            <div className='starships-links-header'>
              <Text>Pilots</Text>
            </div>
            <ul className='starships-pilots-links'>
              {
                starshipPilots.length > 0 ? starshipPilots.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('people', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

StarshipsModal.propTypes =
{
  switchToTile: PropTypes.func,
};

export default StarshipsModal;
