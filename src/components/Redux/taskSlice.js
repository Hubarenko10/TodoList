import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  lastId: 0,
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {
      const { text, description } = action.payload;
      const newTask = {
        id: state.lastId + 1,
        text,
        description,
        completed: false,
      };
      state.items.push(newTask);
      state.lastId += 1;
    },
    toggleCompleted(state, action) {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const {addTask,toggleCompleted} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
