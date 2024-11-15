
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Đảm bảo rằng file này tồn tại và có nội dung chính xác

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
