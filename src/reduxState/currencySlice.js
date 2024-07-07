import { createSlice } from '@reduxjs/toolkit';

import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchRates,
} from './operations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoading: false,
  isError: null,
  rates: [],
};
const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isError = null;
        state.isLoading = true;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
        state.exchangeInfo = null;
      })
      .addCase(fetchRates.pending, state => {
        state.isError = null;
        state.isLoading = true;
      })
      .addCase(fetchRates.fulfilled, (state, { payload }) => {
        state.rates = payload;
        state.isLoading = false;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
        state.rates = [];
      });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
