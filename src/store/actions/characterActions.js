import { starships } from "../../data";
import { REQUEST_STARSHIPS_LIST } from "./actionTypes";

export const setStarshipsList = (starships) => ({ type: REQUEST_STARSHIPS_LIST, starships });

export const requestStarshipsList = () => async (dispatch) => {
  const data = await starships;
  dispatch(setStarshipsList(data));
};
