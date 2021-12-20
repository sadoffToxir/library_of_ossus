import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './VehiclesModal.style.scss';
import Text from '../../Text/Text.jsx';
import { useDispatch } from 'react-redux';
import { urlToId } from '../../common';
import PropTypes from 'prop-types';

const VehiclesModal = ({ switchToTile }) => {
  const vehicle = useSelector((state) => state.vehicles.vehicle);
  const vehiclePilots = useSelector((state) => state.vehicles.vehiclePilots);
  const films = useSelector((state) => state.films.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (vehicle) {
      dispatch({ type: 'LOAD_VEHICLE_PILOTS', elements: vehicle.pilots });
      dispatch({ type: 'LOAD_FILM_FOR_LIST', elements: vehicle.films });
    }
  }, [vehicle]);

  return (
    <>
      <div className='vehicles-modal-name'><Text wrapperClass='vehicle-name'>{vehicle && vehicle.name}</Text></div>
      <div className='vehicles-modal-container'>
        <div className='vehicles-info'>
          <Text wrapperClass='vehicles-info-headers'>Stats</Text>
          <Text>Model: {vehicle && vehicle.model}</Text>
          <Text>Manufacturer: {vehicle && vehicle.manufacturer}</Text>
          <Text>Cost: {vehicle && vehicle.cost_in_credits}</Text>
          <Text>Length: {vehicle && vehicle.length}</Text>
          <Text>Crew: {vehicle && vehicle.crew}</Text>
          <Text>Passengers: {vehicle && vehicle.passengers}</Text>
          <Text>Cargo capacity: {vehicle && vehicle.cargo_capacity}</Text>
          <Text>Consumables: {vehicle && vehicle.consumables}</Text>
          <Text>Vehicle class: {vehicle && vehicle.vehicle_class}</Text>
        </div>

        <div className='vehicles-links'>
          <div className='vehicles-pilots-container'>
            <div className='vehicles-links-header'>
              <Text>Pilots</Text>
            </div>
            <ul className='vehicles-pilots-links'>
              {
                vehiclePilots.length > 0 ? vehiclePilots.map((el) => {
                  return <li key={el.name} onClick={() => switchToTile('people', urlToId(el.url))}>
                    <Text>{el.name}</Text>
                  </li>;
                })
                  : <Text>N/A</Text>
              }
            </ul>
          </div>
          <div className='vehicles-films-container'>
            <div className='vehicles-links-header'>
              <Text>Films</Text>
            </div>
            <ul className='vehicles-films-links'>
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

VehiclesModal.propTypes =
{
  switchToTile: PropTypes.func,
};

export default VehiclesModal;
