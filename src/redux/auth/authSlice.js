import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  loading: false,
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.tokien = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, state => {
      state.loading = false;
      state.isLoggedIn = false;
    });
  },
});
