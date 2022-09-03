import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Countries';

const store = configureStore({
  reducer: {
    countries: countriesReducer,

  },
});
export default store;
