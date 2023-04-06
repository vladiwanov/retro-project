import { createReducer } from '@reduxjs/toolkit';
import action from './language-actions';

const initialState = {
  language: 'UA',
};

const languageReducer = createReducer(initialState, {
  [action.languageAction]: (_, { payload }) => ({ language: payload }),
});

export default {
  languageReducer,
};
