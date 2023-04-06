// import { createStore, applyMiddleware } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// import { languageReducer } from './language/language-reducer';
// import reducers from './language/language-reducer';
import { comboReducer } from './language';

const { languageReducer } = comboReducer;

// const persistConfig = {
//   key: 'store',
//   storage,
// };

const languagePersistConfig = {
  storage,
  // whitelist: [],
  // blacklist: ['language'],
  key: 'language',
};

// ,‼️✅   как работает middleware:
// ,    const myMiddleware = store => next => action => {
// ,     console.log('my Middleware');
// ,   };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // process.env.NODE_ENV !== 'development' && logger,
  // logger,
];

// const rootReducer = combineReducers({
//   language: persistReducer(persistConfig, languageReducer),
// });

// //const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { language: persistReducer(languagePersistConfig, languageReducer) },
  // reducer: { language: persistReducer(languagePersistConfig, reducers) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
