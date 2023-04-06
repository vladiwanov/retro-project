import { createReducer } from '@reduxjs/toolkit';
import {
  submitContactRequest,
  submitContactSuccess,
  submitContactError,
  clearSubmitStatusAction,
} from './submit-actions';

const submitReducer = createReducer('idle', {
  [submitContactRequest]: () => 'Loading',
  [submitContactSuccess]: (state, { payload }) => payload,
  [submitContactError]: (state, { payload }) => payload,
  [clearSubmitStatusAction]: (_, { payload }) => payload,
});

export default submitReducer;
