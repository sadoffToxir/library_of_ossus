import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './PeopleModal.style.scss';
import Text from '../../Text/Text.jsx';
import { useDispatch } from 'react-redux';
import { urlToId } from '../../common';
import PropTypes from 'prop-types';

const PeopleModal = ({ switchToTile }) => {
  const character = useSelector((state) => state.characters.character);
  const homeworld = useSelector((state) => state.planets.planet);
  const characterVehicles = useSelector((state) => state.characters.characterVehicles);
  const characterStarships = useSelector((state) => state.characters.characterStarships);
  const films = useSelector((state) => state.films.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (character) {
      dispatch({ type: 'LOAD_PLANET', id: urlToId(character.homeworld) });
      dispatch({ type: 'LOAD_PERSON_VEHICLES', elements: character.vehicles });
      dispatch({ type: 'LOAD_PERSON_STARSHIP', elements: character.starships });
      dispatch({ type: 'LOAD_FILM_FOR_LIST', elements: character.films });
    }
  }, [character]);

  return (
    <>
      <div className='people-modal-name'><Text wrapperClass='character-name'>{character && character.name}</Text></div>
      <div className='people-modal-container'>
        <div className='people-info'>
          <Text wrapperClass='people-info-headers'>Appearance</Text>
          <Text>Hair color: {character && character.hair_color}</Text>
          <Text>Skin color: {character && character.skin_color}</Text>
          <Text>Eye color: {character && character.eye_color}</Text>
          <Text>Gender: {character && character.gender}</Text>
          <Text wrapperClass='people-info-headers'>Stats</Text>
          <Text>Height: {character && character.height}</Text>
          <Text>Mass: {character && character.mass}</Text>
        </div>
        <div className='people-links'>
          <Text >
            Home world: <span className='people-homeworld' onClick={() => switchToTile('planets', urlToId(homeworld.url))}>
              {homeworld && homeworld.name}
            </span>
          </Text>
          <div className='people-links-container'>
            <div className='people-links-header'><Text>Films</Text></div>
            <ul className='people-links'>
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
          <div className='people-links-container'>
            <div className='people-links-header'><Text>Vehicles</Text></div>
            <ul className='people-links'>
              {
                characterVehicles.length > 0 ? characterVehicles.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('vehicles', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='people-links-container'>
            <div className='people-links-header'><Text>Starships</Text></div>
            <ul className='people-links'>
              {
                characterStarships.length > 0 ? characterStarships.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('starships', urlToId(el.url))}>
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

PeopleModal.propTypes =
{
  switchToTile: PropTypes.func,
};

export default PeopleModal;
