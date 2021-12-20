import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { urlToId } from '../../common/index.js';
import Text from '../../Text/Text.jsx';
import PropTypes from 'prop-types';
import './PlanetsModal.style.scss';

const PlanetsModal = ({ switchToTile }) => {
  const planet = useSelector((state) => state.planets.planet);
  const planetResidents = useSelector((state) => state.planets.planetResidents);
  const films = useSelector((state) => state.films.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (planet) {
      dispatch({ type: 'LOAD_PLANET_RESIDENT', elements: planet.residents });
      dispatch({ type: 'LOAD_FILM_FOR_LIST', elements: planet.films });
    }
  }, [planet]);

  return (
    <>
      <div className='planets-modal-name'><Text wrapperClass='planets-name'>{planet && planet.name}</Text></div>
      <div className='planets-modal-container'>
        <div className='planets-info'>
          <Text wrapperClass='planets-info-headers'>Stats</Text>
          <Text>Rotation period: {planet && planet.rotation_period}</Text>
          <Text>Orbital period: {planet && planet.orbital_period}</Text>
          <Text>Diametr: {planet && planet.diameter}</Text>
          <Text>Climate: {planet && planet.climate}</Text>
          <Text>Gravity: {planet && planet.gravity}</Text>
          <Text>Terrain: {planet && planet.terrain}</Text>
          <Text>Surface water: {planet && planet.surface_water}</Text>
          <Text>Population: {planet && planet.population}</Text>
        </div>
        <div className='planets-links'>
          <div className='planets-residents-container'>
            <div className='planets-links-header'>
              <Text>Residents</Text>
            </div>
            <ul className='planets-residents-links'>
              {
                planetResidents.length > 0 ? planetResidents.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('people', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='planets-films-container'>
            <div className='planets-links-header'>
              <Text>Films</Text>
            </div>
            <ul className='planets-films-links'>
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
        </div>
      </div>
    </>
  );
};

PlanetsModal.propTypes =
{
  switchToTile: PropTypes.func,
};

export default PlanetsModal;
