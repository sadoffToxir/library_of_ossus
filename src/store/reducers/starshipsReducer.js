import { REQUEST_STARSHIPS_LIST, REQUEST_STARSHIP } from "../actions/actionTypes";

const initialState = {
  starship: null,
  starships: null
}

export const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARSHIPS_LIST:
      return Object.assign({}, state, {
        starships: action.starships,
      });
    case REQUEST_STARSHIP:
      return Object.assign({}, state, {
        starship: action.starship,
      });
    default:
      return state;
  }
};
