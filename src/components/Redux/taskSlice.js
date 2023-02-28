import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ text, description }) {
        return {
          payload: {
            text,
            description,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const {addTask,toggleCompleted} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
