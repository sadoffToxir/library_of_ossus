import { REQUEST_PLANETS_LIST } from "../actions/actionTypes";

const initialState = {
  planet: null,
  planets: null
}

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS_LIST:
      return Object.assign({}, state, {
        planets: action.questions,
      });
    default:
      return state;
  }
};
