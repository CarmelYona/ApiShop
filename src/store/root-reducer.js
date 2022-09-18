import { configureStore } from '@reduxjs/toolkit';
import { shopReducer } from './shop/shop.reducer';

export const rootReducer = configureStore({

  reducer: {
    shopModule: shopReducer
  },
});
