import { getListOfStarships, getStarship } from "../../api/starshipsApi";
import { REQUEST_STARSHIPS_LIST, REQUEST_STARSHIP } from "./actionTypes";

export const setStarshipsList = (starships) => ({ type: REQUEST_STARSHIPS_LIST, starships });
export const setStarship = (starship) => ({ type: REQUEST_STARSHIP, starship });

export const requestStarshipsList = () => async (dispatch) => {
  const data = await getListOfStarships();
  dispatch(setStarshipsList(data));
};

export const requestStarship = (id) => async (dispatch) => {
  const data = await getStarship(id);
  dispatch(setStarship(data));
};
