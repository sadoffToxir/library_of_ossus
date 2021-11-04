import { REQUEST_STARSHIPS_LIST } from "../actions/actionTypes";

const initialState = {
  starship: null,
  starships: null
}

export const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARSHIPS_LIST:
      return Object.assign({}, state, {
        starships: action.questions,
      });
    default:
      return state;
  }
};
