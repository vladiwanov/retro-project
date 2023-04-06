import { createAction } from '@reduxjs/toolkit';

// export const languageAction = createAction('language/select');
const languageAction = createAction('language/select');

// export const languageAction = value => ({
//   type: 'language/select',
//   payload: value,
// });

// ! если необходимо задать  payload-шаблон
//export const languageAction = createAction('langulge/select', value => ({
//   payload: value,
// }));

export default {
  languageAction,
};
