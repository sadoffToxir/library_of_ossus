import { REQUEST_PLANETS_LIST, REQUEST_PLANET } from "../actions/actionTypes";

const initialState = {
  planet: null,
  planets: null
}

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_LIST:
      return Object.assign({}, state, {
        planets: action.planets,
      });
    case REQUEST_PLANET:
      return Object.assign({}, state, {
        planet: action.planet,
      });
    default:
      return state;
  }
};
