import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  completedTodosCount: 0,
  uncompletedTodosCount: 0,
  filterBy: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ ...action.payload, id: uuidv4() });
      state.uncompletedTodosCount += 1;
    },
    updateTodo(state, action) {
      const { id, isCompleted } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex == -1) {
        return;
      }

      state.todos[todoIndex] = action.payload;

      if (isCompleted) {
        state.completedTodosCount += 1;
        state.uncompletedTodosCount -= 1;
      } else {
        state.completedTodosCount -= 1;
        state.uncompletedTodosCount += 1;
      }
    },
    setFilterBy(state, action) {
      state.filterBy = action.payload;
    },
  },
});

export const { addTodo, updateTodo, setFilterBy } = todosSlice.actions;

export default todosSlice.reducer;
