import { getListOfPlanets, getPlanet } from "../../api/PlanetsApi";
import { REQUEST_PLANETS_LIST, REQUEST_PLANET } from "./actionTypes";

export const setPlanetsList = (planets) => ({ type: REQUEST_PLANETS_LIST, planets });
export const setPlanet = (planet) => ({ type: REQUEST_PLANET, planet });

export const requestPlanetsList = () => async (dispatch) => {
  const data = await getListOfPlanets();
  dispatch(setPlanetsList(data));
};

export const requestPlanet = (id) => async (dispatch) => {
  const data = await getPlanet(id);
  dispatch(setPlanet(data));
};
