import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { channelsReducer } from './channels/slice';
import {myFilterSlice} from "./Filter/slice"
// import { commentsReducer } from './comments/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    channels: channelsReducer,
    filter: myFilterSlice.reducer
    // comments: commentsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);
