import { createAction } from '@reduxjs/toolkit';

export const planetsListSet = createAction('PLANETS_LIST_SET');
export const planetSet = createAction('PLANET_SET');
export const planetResidentsSet = createAction('PLANET_RESIDENTS_SET');
export const planetRemove = createAction('PLANET_REMOVE');
export const planetResidentsRemove = createAction('PLANET_RESIDENTS_REMOVE');
