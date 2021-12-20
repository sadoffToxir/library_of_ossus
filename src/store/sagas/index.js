import { takeEvery, put, call } from 'redux-saga/effects';
import { getCharacter, getCharacterStarship, getCharacterVehicle, getListOfCharacters } from '../../api/charactersApi';
import 'regenerator-runtime/runtime';
import { characterSet, charactersListSet, characterStarshipSet, characterVehicleSet } from '../actions/charactersActions';
import { planetResidentsSet, planetSet, planetsListSet } from '../actions/planetsActions';
import { starshipPilotsSet, starshipSet, starshipsListSet } from '../actions/starshipsActions';
import { getListOfPlanets, getPlanet } from '../../api/PlanetsApi';
import { getListOfStarships, getStarship } from '../../api/starshipsApi';
import { contentLoadingFalseSet, contentLoadingTrueSet, modalLoadingFalseSet, modalLoadingTrueSet } from '../actions/loadersActions';
import { vehiclePilotsListSet, vehicleSet } from '../actions/vehiclesActions';
import { getVehicle } from '../../api/vehiclesApi';
import { getFilm, getSpecies } from '../../api/filmsApi';
import { filmCharacterListSet, filmPlanetsListSet, filmSet, filmsListSet, filmSpeciesListSet, filmStarshipsListSet, filmVehiclesListSet } from '../actions/filmsActions';
import { themeChange } from '../actions/themeActions';
import { urlToId } from '../../components/common';

// funcs
const requestList = (elements, getFunc) => {
  return new Promise((resolve, reject) => {
    const datas = [];
    elements.map(async (el) => {
      const data = await getFunc(urlToId(el));
      datas.push(data);
      if (elements.length === datas.length) {
        resolve(datas);
      }
    });
  });
};
// workers
export function* changeTheme(args) {
  document.body.setAttribute('theme', args.theme);
  yield put(themeChange(args.theme));
}

export function* requestCharactersListSaga(args) {
  yield put(contentLoadingTrueSet());
  const data = yield getListOfCharacters(args.pageNum);
  console.log(data)
  yield put(contentLoadingFalseSet());
  yield put(charactersListSet(data));
}

export function* requestCharacter(args) {
  yield put(modalLoadingTrueSet());
  const data = yield getCharacter(args.id);
  yield put(characterSet(data));
  yield put(modalLoadingFalseSet());
}

export function* requestCharacterVehicle(args) {
  const datas = yield call(requestList, args.elements, getCharacterVehicle);
  yield put(characterVehicleSet(datas));
}

export function* requestCharacterStarship(args) {
  const datas = yield call(requestList, args.elements, getCharacterStarship);
  yield put(characterStarshipSet(datas));
}

export function* requestPlanetsList(args) {
  yield put(contentLoadingTrueSet());
  const data = yield getListOfPlanets(args.pageNum);
  yield put(planetsListSet(data));
  yield put(contentLoadingFalseSet());
}

export function* requestPlanet(args) {
  const data = yield getPlanet(args.id);
  yield put(planetSet(data));
}

export function* requestPlanetResident(args) {
  const datas = yield call(requestList, args.elements, getCharacter);
  yield put(planetResidentsSet(datas));
}

export function* requestStarshipsList(args) {
  yield put(contentLoadingTrueSet());
  const data = yield getListOfStarships(args.pageNum);
  yield put(starshipsListSet(data));
  yield put(contentLoadingFalseSet());
}

export function* requestStarship(args) {
  yield put(modalLoadingTrueSet());
  const data = yield getStarship(args.id);
  yield put(starshipSet(data));
  yield put(modalLoadingFalseSet());
}

export function* requestStarshipPilots(args) {
  const datas = yield call(requestList, args.elements, getCharacter);
  yield put(starshipPilotsSet(datas));
}

export function* requestVehiclePilots(args) {
  const datas = yield call(requestList, args.elements, getCharacter);
  yield put(vehiclePilotsListSet(datas));
}

export function* requestVehicle(args) {
  const data = yield getVehicle(args.id);
  yield put(vehicleSet(data));
}

export function* requestFilmForList(args) {
  const datas = yield call(requestList, args.elements, getFilm);
  yield put(filmsListSet(datas));
}

export function* requestFilm(args) {
  const data = yield getFilm(args.id);
  yield put(filmSet(data));
}

export function* requestFilmCharactersList(args) {
  const datas = yield call(requestList, args.elements, getCharacter);
  yield put(filmCharacterListSet(datas));
}

export function* requestFilmPLanetsList(args) {
  const datas = yield call(requestList, args.elements, getPlanet);
  yield put(filmPlanetsListSet(datas));
}

export function* requestFilmStarshipsList(args) {
  const datas = yield call(requestList, args.elements, getStarship);
  yield put(filmStarshipsListSet(datas));
}

export function* requestFilmVehiclesList(args) {
  const datas = yield call(requestList, args.elements, getVehicle);
  yield put(filmVehiclesListSet(datas));
}

export function* requestFilmSpeciesList(args) {
  const datas = yield call(requestList, args.elements, getSpecies);
  yield put(filmSpeciesListSet(datas));
}

// watcher
export function* watchRequestSaga() {
  yield takeEvery('LOAD_THEME', changeTheme);
  yield takeEvery('LOAD_PEOPLE', requestCharactersListSaga);
  yield takeEvery('LOAD_PERSON', requestCharacter);
  yield takeEvery('LOAD_PERSON_VEHICLES', requestCharacterVehicle);
  yield takeEvery('LOAD_PERSON_STARSHIP', requestCharacterStarship);
  yield takeEvery('LOAD_PLANETS', requestPlanetsList);
  yield takeEvery('LOAD_PLANET', requestPlanet);
  yield takeEvery('LOAD_PLANET_RESIDENT', requestPlanetResident);
  yield takeEvery('LOAD_STARSHIPS', requestStarshipsList);
  yield takeEvery('LOAD_STARSHIP', requestStarship);
  yield takeEvery('LOAD_STARSHIP_PILOTS', requestStarshipPilots);
  yield takeEvery('LOAD_VEHICLE_PILOTS', requestVehiclePilots);
  yield takeEvery('LOAD_VEHICLE', requestVehicle);
  yield takeEvery('LOAD_FILM_FOR_LIST', requestFilmForList);
  yield takeEvery('LOAD_FILM', requestFilm);
  yield takeEvery('LOAD_FILM_CHARACTERS', requestFilmCharactersList);
  yield takeEvery('LOAD_FILM_PLANETS', requestFilmPLanetsList);
  yield takeEvery('LOAD_FILM_STARSHIPS', requestFilmStarshipsList);
  yield takeEvery('LOAD_FILM_VEHICLES', requestFilmVehiclesList);
  yield takeEvery('LOAD_FILM_SPECIES', requestFilmSpeciesList);

}

export default function* rootSaga() {
  yield watchRequestSaga();
}
