// import actionTypes from './types';
import initialContacts from '../../contacts.json';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import appActions from './actions';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

// const contacts = createReducer(initialState, {
//   [actions.addContact]: (state, { payload }) => {
//     console.log('payload', payload);
//     console.log('state', state);

//     const checkedContactNames = state.map(contact => {
//       return contact.name.toLowerCase();
//     });
//     if (!checkedContactNames.includes(payload.name.toLowerCase())) {
//       return [...state, payload];
//     } else {
//       alert(`${payload.name} is already in contacts`);
//       return state;
//     }
//   },
//   [actions.deleteContact]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload.id);
//   },
// });

const contacts = createReducer(initialState, {
  [appActions.addContact]: (state, { payload }) => {
    return {
      ...state,
      items: [...state.items, payload],
    };
  },
  [appActions.deleteContact]: (state, { payload }) => {
    // console.log('reducer payload', action);
    // console.log('reducer state', state.items);
    return {
      ...state,
      items: [...state.items.filter(contact => contact.id !== payload)],
    };
  },
  [appActions.setContacts]: (state, { payload }) => {
    console.log();
    return {
      ...state,
      items: payload,
    };
  },
  [appActions.contactFetchStarted]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  },
  [appActions.contactFetchFinished]: (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  },
  [appActions.contactFetchError]: (state, { payload }) => {
    return {
      ...state,
      error: payload,
    };
  },
});

const filter = createReducer('', {
  [appActions.setFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ contacts, filter });
