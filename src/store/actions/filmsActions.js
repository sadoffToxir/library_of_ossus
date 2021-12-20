import { createAction } from '@reduxjs/toolkit';

export const filmsListSet = createAction('FILMS_LIST_SET');
export const filmCharacterListSet = createAction('FILM_CHARACTERS_LIST_SET');
export const filmPlanetsListSet = createAction('FILM_PLANETS_LIST_SET');
export const filmStarshipsListSet = createAction('FILM_STARSHIPS_LIST_SET');
export const filmVehiclesListSet = createAction('FILM_VEHICLES_LIST_SET');
export const filmSpeciesListSet = createAction('FILM_SPECIES_LIST_SET');
export const filmSet = createAction('FILM_SET');
export const filmsListRemove = createAction('FILMS_LIST_REMOVE');
export const filmCharacterListRemove = createAction('FILM_CHARACTERS_LIST_REMOVE');
export const filmPlanetsListRemove = createAction('FILM_PLANETS_LIST_REMOVE');
export const filmStarshipsListRemove = createAction('FILM_STARSHIPS_LIST_REMOVE');
export const filmVehiclesListRemove = createAction('FILM_VEHICLES_LIST_REMOVE');
export const filmSpeciesListRemove = createAction('FILM_SPECIES_LIST_REMOVE');
export const filmRemove = createAction('FILM_REMOVE');
