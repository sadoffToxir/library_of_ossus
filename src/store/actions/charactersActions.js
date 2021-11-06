import { getListOfCharacters } from "../../api/charactersApi";
import { REQUEST_CHARACTERS_LIST, REQUEST_CHARACTER } from "./actionTypes";

export const setCharactersList = (characters) => ({ type: REQUEST_CHARACTERS_LIST, characters });
export const setCharacter = (character) => ({ type: REQUEST_CHARACTER, character });

export const requestCharactersList = () => async (dispatch) => {
  const data = await getListOfCharacters();
  dispatch(setCharactersList(data));
};

export const requestCharacter = (id) => async (dispatch) => {
  const data = await getCharacter(id);
  dispatch(setCharacter(data));
};
