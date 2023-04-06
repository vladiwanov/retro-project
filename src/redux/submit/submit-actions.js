import { createAction } from '@reduxjs/toolkit';

export const submitContactRequest = createAction('addContact/request');
export const submitContactSuccess = createAction('addContact/success');
export const submitContactError = createAction('addContact/error');
export const clearSubmitStatusAction = createAction('clearStatus/idle');
