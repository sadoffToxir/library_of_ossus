import { createAction } from '@reduxjs/toolkit';

export const starshipsListSet = createAction('STARSHIPS_LIST_SET');
export const starshipSet = createAction('STARSHIP_SET');
export const starshipPilotsSet = createAction('STARSHIP_PILOTS_SET');
export const starshipRemove = createAction('STARSHIP_REMOVE');
export const starshipPilotsRemove = createAction('STARSHIP_PILOTS_REMOVE');
