import { createAction } from '@reduxjs/toolkit';

export const charactersListSet = createAction('CHARACTERS_LIST_SET');
export const characterSet = createAction('CHARACTER_SET');
export const characterVehicleSet = createAction('CHARACTER_VEHICLES_SET');
export const characterStarshipSet = createAction('CHARACTER_STARSHIPS_SET');
export const characterRemove = createAction('CHARACTER_REMOVE');
export const characterVehiclesRemove = createAction('CHARACTER_VEHICLES_REMOVE');
export const characterStarshipsRemove = createAction('CHARACTER_STARSHIPS_REMOVE');
