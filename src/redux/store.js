import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filtersReducer } from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filtersReducer,
  },
});
