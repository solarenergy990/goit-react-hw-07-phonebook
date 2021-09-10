import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import appReducer from './app/reducer';
import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'appState',
//   storage,
//   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  appState: appReducer,
});

const middleware = [
  thunk,
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// const store = createStore(persistedReducer, composeWithDevTools());

// const persistor = persistStore(store);

// const storeItems = {
//   store,
//   persistor,
// };

export default store;
