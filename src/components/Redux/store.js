import { tasksReducer } from './taskSlice';
import { configureStore } from '@reduxjs/toolkit';
import { modalSliceReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalSliceReducer,
  },
});
