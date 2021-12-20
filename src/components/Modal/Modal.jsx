import React from 'react';
import './Modal.style.scss';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';
import PeopleModal from './PeopleModal/PeopleModal.jsx';
import PlanetsModal from './PlanetsModal/PlanetsModal.jsx';
import StarshipsModal from './StarshipsModal/StarshipsModal.jsx';
import { useDispatch } from 'react-redux';
import { characterRemove, characterStarshipsRemove, characterVehiclesRemove } from '../../store/actions/charactersActions';
import { planetRemove, planetResidentsRemove } from '../../store/actions/planetsActions';
import { starshipPilotsRemove, starshipRemove } from '../../store/actions/starshipsActions';
import * as queryString from 'querystring';
import { filmCharacterListRemove, filmPlanetsListRemove, filmRemove, filmsListRemove, filmSpeciesListRemove, filmStarshipsListRemove, filmVehiclesListRemove } from '../../store/actions/filmsActions';
import { vehicleRemove, vehiclePilotsListRemove } from '../../store/actions/vehiclesActions';
import VehiclesModal from './VehiclesModal/VehiclesModal.jsx';
import FilmsModal from './FilmsModal/FilmsModal.jsx';


const Modal = ({ setModalOpenness, modalOpenness, setIdToRequest }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const switchToTile = (catalog, id) => {
    history.push({
      pathname: `/${catalog}`,
      search: queryString.stringify({ id })
    });
    closeHandler();
  };

  const closeModal = () => {
    closeHandler();
    history.push({
      search: ''
    });
  };

  const closeHandler = () => {
    setIdToRequest(null);
    setModalOpenness(false);
    dispatch(characterRemove());
    dispatch(characterVehiclesRemove());
    dispatch(characterStarshipsRemove());
    dispatch(planetRemove());
    dispatch(planetResidentsRemove());
    dispatch(starshipRemove());
    dispatch(starshipPilotsRemove());
    dispatch(vehicleRemove());
    dispatch(filmRemove());
    dispatch(filmsListRemove());
    dispatch(vehiclePilotsListRemove());
    dispatch(filmCharacterListRemove());
    dispatch(filmPlanetsListRemove());
    dispatch(filmStarshipsListRemove());
    dispatch(filmVehiclesListRemove());
    dispatch(filmSpeciesListRemove());
  };

  return <div className='modal-outside' onClick={closeModal} style={{ display: !modalOpenness && 'none' }}>
    <div className='modal-content' onClick={(event) => event.stopPropagation()} >
      <div className='modal-inner-content'>
        <div className='modal-closeButton' onClick={closeModal}>
          &times;
        </div>

        {
          modalOpenness && location.pathname === '/people' ? <PeopleModal switchToTile={switchToTile} />
            : modalOpenness && location.pathname === '/planets' ? <PlanetsModal switchToTile={switchToTile} />
              : modalOpenness && location.pathname === '/starships' ? <StarshipsModal switchToTile={switchToTile} />
                : modalOpenness && location.pathname === '/vehicles' ? <VehiclesModal switchToTile={switchToTile} />
                  : modalOpenness && location.pathname === '/films' ? <FilmsModal switchToTile={switchToTile} />
                    : null
        }
      </div>
    </div>
  </div >;
};

Modal.propTypes =
{
  setModalOpenness: PropTypes.func,
  setIdToRequest: PropTypes.func,
  modalOpenness: PropTypes.any,
};

export default Modal;
