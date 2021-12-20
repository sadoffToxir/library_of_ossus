import { createAction } from '@reduxjs/toolkit';

export const contentLoadingTrueSet = createAction('CONTENT_LOADING_TRUE_SET');
export const modalLoadingTrueSet = createAction('MODAL_LOADING_TRUE_SET');
export const contentLoadingFalseSet = createAction('CONTENT_LOADING_FALSE_SET');
export const modalLoadingFalseSet = createAction('MODAL_LOADING_FALSE_SET');
