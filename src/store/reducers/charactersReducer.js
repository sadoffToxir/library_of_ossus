import { REQUEST_CHARACTERS_LIST } from "../actions/actionTypes";

const initialState = {
  character: null,
  characters: null
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS_LIST:
      return Object.assign({}, state, {
        characters: action.characters,
      });
    default:
      return state;
  }
};
