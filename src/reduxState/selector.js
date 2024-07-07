import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentCurrency = state => state.currency.baseCurrency;

export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectIsError = state => state.currency.isError;

export const selectIsLoading = state => state.currency.isLoading;

export const selectRates = state => state.currency.rates;

export const selectFilter = state => state.filter.value;

export const selectFilteredRates = createSelector(
  [selectCurrentCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    return rates
      .filter(([key]) => key !== baseCurrency  && key.toLowerCase().includes(filter.toLowerCase()))
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
