import React, { useEffect, useState } from 'react';
import preloader from '../../assets/gifs/preloader.gif';
import Text from '../Text/Text.jsx';
import { useDispatch } from 'react-redux';
import Tile from '../Tile/Tile.jsx';
import './Content.style.scss';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal.jsx';
import Layout from '../Layout/Layout.jsx';
import * as queryString from 'querystring';

const Content = () => {
  const history = useHistory();
  const location = history.location.pathname.slice(1);
  const dispatch = useDispatch();
  const [modalOpenness, setModalOpenness] = useState(false);
  const [idToRequest, setIdToRequest] = useState(null);
  const [nextPeople, setNextPeople] = useState(2);
  const [nextPlanets, setNextPlanets] = useState(2);
  const [nextStarships, setNextStarships] = useState(2);

  const starships = useSelector((state) => state.starships.starships);
  const people = useSelector((state) => state.characters.characters);
  const planets = useSelector((state) => state.planets.planets);
  const loading = useSelector((state) => state.loaders.contentLoading);

  useEffect(() => {
    if (idToRequest) {
      setModalOpenness(true);
      if (location === 'people') {
        dispatch({ type: 'LOAD_PERSON', id: idToRequest });
      } else if (location === 'starships') {
        dispatch({ type: 'LOAD_STARSHIP', id: idToRequest });
      } else if (location === 'planets') {
        dispatch({ type: 'LOAD_PLANET', id: idToRequest });
      } else if (location === 'vehicles') {
        dispatch({ type: 'LOAD_VEHICLE', id: idToRequest });
      } else if (location === 'films') {
        dispatch({ type: 'LOAD_FILM', id: idToRequest });
      }
      setIdToRequest(null);
    }
  }, [idToRequest]);

  useEffect(() => {
    if (history.location.search) {
      setIdToRequest(queryString.parse(history.location.search.substr(1)).id);
      setModalOpenness(true);
    }

    if ((location === 'films' || location === 'vehicles') && !history.location.search) {
      history.push({
        pathname: '/people'
      });
    }
    if (location === 'people' && !people.results) {
      dispatch({ type: 'LOAD_PEOPLE', pageNum: 1 });
    } else if (location === 'starships' && !starships.results) {
      dispatch({ type: 'LOAD_STARSHIPS', pageNum: 1 });
    } else if (location === 'planets' && !planets.results) {
      dispatch({ type: 'LOAD_PLANETS', pageNum: 1 });
    }

  }, [history.location]);

  const loadMore = () => {
    const next = location === 'people' ? nextPeople
      : location === 'planets' ? nextPlanets : location === 'starships' ? nextStarships : null;
    const type = location === 'people' ? 'LOAD_PEOPLE'
      : location === 'planets' ? 'LOAD_PLANETS' : location === 'starships' ? 'LOAD_STARSHIPS' : null;

    dispatch({ type, pageNum: next });
    if (location === 'people') {
      setNextPeople(next + 1);
    } else if (location === 'planets') {
      setNextPlanets(next + 1);
    } else if (location === 'starships') {
      setNextStarships(next + 1);
    }
  };

  return (
    <Layout>
      {
        loading ? <img src={preloader} alt='' /> : null
      }
      <Modal modalOpenness={modalOpenness} setModalOpenness={setModalOpenness} setIdToRequest={setIdToRequest} />
      <div className='content-catalog'>
        {
          people.results && location === 'people' ? people.results.map((el) => {
            return <Tile letters={el.name} key={el.name} setModalOpenness={setModalOpenness} setIdToRequest={setIdToRequest}
              url={el.url}>
              <Text><b>Name:</b> {el.name}</Text>
              <Text><b>Birth year:</b> {el.birth_year}</Text>
              <Text><b>Gender:</b> {el.gender}</Text>
            </Tile>;
          }) : null
        }
        {
          planets.results && location === 'planets' ? planets.results.map((el) => {
            return <Tile letters={el.name} key={el.name} setModalOpenness={setModalOpenness} setIdToRequest={setIdToRequest}
              url={el.url}>
              <Text><b>Name:</b> {el.name}</Text>
              <Text><b>Population:</b> {el.population}</Text>
            </Tile>;
          }) : null
        }
        {
          starships.results && location === 'starships' ? starships.results.map((el) => {
            return <Tile letters={el.name} key={el.name} setModalOpenness={setModalOpenness} setIdToRequest={setIdToRequest}
              url={el.url}>
              <Text><b>Name:</b> {el.name}</Text>
              <Text><b>Cost:</b> {el.cost_in_credits}</Text>
              <Text><b>Passengers:</b> {el.passengers}</Text>
            </Tile>;
          }) : null
        }
      </div>

      {
        (people && location === 'people' && people.next) || (planets && planets.next && location === 'planets') || (starships && starships.next && location === 'starships')
          ? <div className='loadButton' onClick={loadMore}><Text>Load more</Text></div>
          : null
      }

    </Layout >
  );
};

export default Content;
