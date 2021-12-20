import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './FilmsModal.style.scss';
import Text from '../../Text/Text.jsx';
import { useDispatch } from 'react-redux';
import { urlToId } from '../../common';
import PropTypes from 'prop-types';

const FilmsModal = ({ switchToTile }) => {
  const film = useSelector((state) => state.films.film);
  const filmCharacters = useSelector((state) => state.films.filmCharacters);
  const filmPlanets = useSelector((state) => state.films.filmPlanets);
  const filmStarships = useSelector((state) => state.films.filmStarships);
  const filmVehicles = useSelector((state) => state.films.filmVehicles);
  const filmSpecies = useSelector((state) => state.films.filmSpecies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (film) {
      dispatch({ type: 'LOAD_FILM_CHARACTERS', elements: film.characters });
      dispatch({ type: 'LOAD_FILM_PLANETS', elements: film.planets });
      dispatch({ type: 'LOAD_FILM_STARSHIPS', elements: film.starships });
      dispatch({ type: 'LOAD_FILM_VEHICLES', elements: film.vehicles });
      dispatch({ type: 'LOAD_FILM_SPECIES', elements: film.species });
    }
  }, [film]);

  return (
    <>
      <div className='films-modal-name'><Text wrapperClass='film-title'>{film && film.title}</Text></div>
      <div className='films-modal-container'>
        <div className='films-info'>
          <Text wrapperClass='films-info-headers'>Details</Text>
          <Text>Episode id: {film && film.episode_id}</Text>
          <Text>Opening crawl: {film && film.opening_crawl}</Text>
          <Text>Director: {film && film.director}</Text>
          <Text>Producer: {film && film.producer}</Text>
          <Text>Release date: {film && film.release_date}</Text>
        </div>
        <div className='films-links'>
          <div className='films-characters-container'>
            <div className='films-links-header'>
              <Text>Characters</Text>
            </div>
            <ul className='films-characters-links'>
              {
                filmCharacters.length > 0 ? filmCharacters.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('people', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='films-planets-container'>
            <div className='films-links-header'>
              <Text>Planets</Text>
            </div>
            <ul className='films-planets-links'>
              {
                filmPlanets.length > 0 ? filmPlanets.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('planets', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='films-starships-container'>
            <div className='films-links-header'>
              <Text>Starships</Text>
            </div>
            <ul className='films-starships-links'>
              {
                filmStarships.length > 0 ? filmStarships.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('starships', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='films-vehicles-container'>
            <div className='films-links-header'>
              <Text>Vehicles</Text>
            </div>
            <ul className='films-vehicles-links'>
              {
                filmVehicles.length > 0 ? filmVehicles.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('vehicles', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='films-species-container'>
            <div className='films-links-header'>
              <Text>Species</Text>
            </div>
            <ul className='films-species-links'>
              {
                filmSpecies.length > 0 ? filmSpecies.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('species', urlToId(el.url))}>
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

FilmsModal.propTypes =
{
  switchToTile: PropTypes.func,
};

export default FilmsModal;
