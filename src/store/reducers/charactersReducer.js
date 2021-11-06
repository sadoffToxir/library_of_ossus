import { REQUEST_CHARACTERS_LIST, REQUEST_CHARACTER } from "../actions/actionTypes";

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
    case REQUEST_CHARACTER:
      return Object.assign({}, state, {
        character: action.character,
      });
    default:
      return state;
  }
};
