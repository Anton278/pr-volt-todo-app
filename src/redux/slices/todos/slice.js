import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  completedTodosCount: 0,
  uncompletedTodosCount: 0,
  filterBy: "all",
  filteredTodos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const id = uuidv4();

      state.todos.push({ ...action.payload, id });
      state.uncompletedTodosCount += 1;

      if (state.filterBy === "all" || state.filterBy === "uncompleted") {
        state.filteredTodos.push({ ...action.payload, id });
      }
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

      state.filteredTodos = state.todos.filter((todo) => {
        if (state.filterBy === "all") {
          return true;
        }
        return state.filterBy === "completed"
          ? todo.isCompleted
          : !todo.isCompleted;
      });
    },
    setFilterBy(state, action) {
      state.filterBy = action.payload;

      state.filteredTodos = state.todos.filter((todo) => {
        if (state.filterBy === "all") {
          return true;
        }
        return state.filterBy === "completed"
          ? todo.isCompleted
          : !todo.isCompleted;
      });
    },
  },
});

export const { addTodo, updateTodo, setFilterBy } = todosSlice.actions;

export default todosSlice.reducer;
